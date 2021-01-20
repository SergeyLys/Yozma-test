import { makeObservable, observable, action } from "mobx"
import mock from '../mock/dictionary.json';
import {Result, Words} from "./types";

class Dictionary {
  words = mock as Words;

  constructor() {
    makeObservable(this, {
      findWord: action,
    });
  }

  async findWord(character: string): Promise<Result> {
    const worker: Worker = new Worker(`${process.env.PUBLIC_URL}/workers/sorter.js`);
    worker.postMessage({words: this.words, character});

    return await new Promise((resolve, reject) => {
      worker.onmessage = (event: MessageEvent) => {
        if (event && event.data) {
          resolve(event.data.result);
        }
      };
    });
  }
}

export default Dictionary;

import React, {useState} from 'react';
import {observer} from "mobx-react";
import { Chart } from "react-google-charts";
import {Props} from "./types";
import {Wrapper, Title, Input, Inner, Button, ResultList} from "./styles";
import {Result} from "../../store";
import {Spinner} from "../../assets/images/loader";

export const Dictionary: React.FC<Props> = observer(({store}) => {
  const [typed, setTyped] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [results, setResults] = useState<Result>({ends: [], starts: [], contains: [], doubles: []});

  const handleSearch = async () => {
    setLoading(true);
    const result = await store.findWord(typed);
    setResults(result);
    setLoading(false);
  };

  const isResultsPresent = Object.values(results).some((value) => value.length > 0);

  return (
    <Wrapper>
      <Inner>
        <Title>Awesome Dictionary</Title>
        <Input readOnly={isLoading} type="text" value={typed} onChange={(e) => setTyped(e.target.value)} />

        <Button disabled={isLoading} onClick={handleSearch}>
          {isLoading ? <Spinner /> : 'Search'}
        </Button>

        {isResultsPresent && (
          <ResultList>
            <strong>Total:</strong>
            <span>Ends: {results.ends.length}</span>
            <span>Starts: {results.starts.length}</span>
            <span>Contains: {results.contains.length}</span>
            <span>Doubles: {results.doubles.length}</span>
          </ResultList>
        )}

        <Chart
          width={600}
          height={600}
          chartType="ColumnChart"
          data={[
            [
              'Element',
              'Total',
              { role: 'style' },
              {
                sourceColumn: 0,
                role: 'annotation',
                type: 'string',
                calc: 'stringify',
              },
            ],
            ['Doubles', results.doubles.length, null, null],
            ['Ends', results.ends.length, null, null],
            ['Starts', results.starts.length, null, null],
            ['Contains', results.contains.length, null, null],
          ]}
          options={{
            title: isResultsPresent && typed.length ? `Results for word ${typed}` : 'Type word to see result',
            bar: { groupWidth: '95%' },
            legend: { position: 'none' },
            backgroundColor: 'transparent',
          }}
        />
      </Inner>
    </Wrapper>
  )
})

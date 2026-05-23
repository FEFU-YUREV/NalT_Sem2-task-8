import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, Radio, RadioGroup } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setChoiceAnswer } from './quizSlice';

interface ComponentProps {
    index: number;
    options: string[];
    multiple?: boolean;
}

function Choice({index, options, multiple}: ComponentProps) {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
     dispatch(setChoiceAnswer({ index, items: selected }));
  }, [selected, dispatch, index]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (multiple) {
          setSelected(prev => 
              event.target.checked ? [...prev, value] : prev.filter(item => item !== value)
          );
      } else {
          setSelected([value]);
      }
  };

  return (
    <Box sx={{ mt: 2 }}>
        <FormControl component="fieldset">
            {multiple ? (
                <FormGroup>
                    {options.map((opt, i) => (
                        <FormControlLabel
                            key={i}
                            control={<Checkbox checked={selected.includes(opt)} onChange={handleChange} value={opt} />}
                            label={opt}
                        />
                    ))}
                </FormGroup>
            ) : (
                <RadioGroup value={selected[0] || ''} onChange={handleChange}>
                    {options.map((opt, i) => (
                        <FormControlLabel
                            key={i}
                            value={opt}
                            control={<Radio />}
                            label={opt}
                        />
                    ))}
                </RadioGroup>
            )}
        </FormControl>
    </Box>
  );
}

export default Choice;

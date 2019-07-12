import { useState } from 'react'

export default ({ defaultvalue = '', validator }) => {
  const [value, setValue] = useState(defaultvalue);

  const onChange = ({ target: { value } }) => typeof validator === 'function' ?
    Error('don\'t have validator') : !validator(value) ? Error('not vaild value') : setValue(value)

  return { value, onChange }
};

/*
[example]

export default () => {
  const validateString = value => typeof value === 'string'
  const username = useInput({
    defaultValue: 'username',
    validator: validateString()
  })
  return (<input {...username} />)
}
*/
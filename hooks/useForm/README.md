useForm Hook

Example:
```
    const [values, handleInputChange, reset] = useForm(initialState)



    <input
        name = nameOfInput
        value= {values.nameOfInput}
        onchange= { handleInputChange }
    />
```


useForm() // receives a default object value  {name: '',email: '',password: ''}


handleInputChange: function that modify the state 

reset: function that reset the Form
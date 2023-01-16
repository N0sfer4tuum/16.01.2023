import { useState, useEffect } from "react";

const useEffectComponent = () => {
  useEffect(() => {
    return () => console.log("Component was deleated");
  }, []);

  return(
    <div>
      ААААААААААААААААААААААААААААААААААААААААА
    </div>
  )
}

const App = () =>{

  const[count, setCount] = useState(0);
  const [name, setName] = useState("");

  const [skills, setSkills] = useState(['Чин', 'Чен', 'Чон', 'Чин']);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

const [a, setA] = useState(0);
console.log('За пределами useEffect');
  useEffect(() => {
    console.log('Ура! Рендер!'); 
  }, [count, form]);

  const onChangeHandle = (e) => {
    setName(e.target.value);
    setCount(e.target.value.length);
  };

  const onSubmitAddSkill = (e) => {
    if (e.keyCode === 13){
      setSkills((prevState) => {
        return[...prevState, e.target.value];
      });
    }
  };

  const onChangeFormHandle = (e) => {
    setForm((prevState) => {
      prevState = {...prevState};

      prevState[e.target.name] = e.target.value;

      return prevState;
    });
  }

  return(
    <div>
      <p>Вы нажали на меня {count} раз(а)</p>
      <button onClick={() => setCount((prev) => prev+1)}>+1</button>
      <button onClick={() => setCount(count + 5)}>+5</button>

      {
        count >= 10 ? <h1>Compomemt is unavailable now :c</h1> : <useEffectComponent/>
      }
      <br />

      <h1>Привет, {name}!</h1>
      <input type="text" onChange={(e) => onChangeHandle(e)} />

      <br />

    <input type="text" onKeyDown={(e) => onSubmitAddSkill(e)} />

      <ul>
        {
          skills.map((skill) => {
            return(
              <li>{skill}</li>
            )
          })
        }
      </ul>
      <br />

      <form onSubmit={(e) => e.preventDefault()}>
        <label>Email:</label>
        <input 
          type="email"
          name="email" 
          onChange={(e) => onChangeFormHandle(e)} 
          value={form.email}
        />

        <label>Password:</label>
        <input 
          type="password" 
          name="password" 
          onChange={(e) => onChangeFormHandle(e)} 
          value={form.email}
        />

        <button>Отправить форму</button>
      </form>
    </div>
    
  )
}

export default App

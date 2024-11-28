import { Hijo } from './../components/Hijo'
import { PulsaBotones } from './../components/CardUseRef/PulsaBotonUseRef'
import { Contador } from './../components/CardUseRef/ContadorUseRef'
import { AutoFocus } from './../components/CardUseRef/AutoFocusUseRef'
import { MenPrev } from './../components/CardUseRef/MensajePrevioUseRef'
import { Counter } from './../components/CardUseRef/FiveUseRef'
import { Stopwatch } from './../components/CardUseRef/SixUseRef'
import { Form } from './../components/CardUseRef/SevenUseRef'
import { CatFriends } from './../components/CardUseRef/EightUseRef'
import { VideoPlayer } from './../components/CardUseRef/NineUseRef'
import { FormTwo } from './../components/CardUseRef/TenUseRef'
import { TareasRed } from './../components/CardReducer/TareasReducer'
import { CounterRed } from './../components/CardReducer/EdadReducer'
import { ItiReducer } from './../components/CardReducer/ItiReducer'
import { TodoList } from './../components/CardReducer/InitReducer'
import { TodoListStateReducer } from './../components/CardReducer/StateReducer'
import { Main } from './../components/CardCall/Main'
import { UserDetail } from './../components/CardCall/UserDetail'
import { ApiFetchArrow } from './../components/ApiFetch/ApiFetchArrow'
import { ApiFetchFunc } from './../components/ApiFetch/ApiFetchFunc'
import { ApiFetchCall } from './../components/ApiFetch/ApiFetchCall'
import { ApiRQuery } from './../components/ApiFetch/ApiRQuery'
// import { RegisterForm } from '../components/RegisterForm'

const API_URL = 'https://pokeapi.co/api/v2/berry/'

export const options = [
    {
      title: 'useContext',
      component: <Hijo />,
    },
    {
      title: 'useRef',
      component: <PulsaBotones/>,
    },
    {
      title: 'useRefTwo',
      component: <Contador/>,
    },
    {
      title: 'useRefThree',
      component: <AutoFocus/>,
    },
    {
      title: 'useRefFour',
      component: <MenPrev/>,
    },
    {
      title: 'useRefFive',
      component: <Counter/>,
    },
    {
      title: 'useRefSix',
      component: <Stopwatch/>,
    },
    {
      title: 'useRefSeven',
      component: <Form/>,
    },
    {
      title: 'useRefEigth',
      component: <CatFriends/>,
    },
    {
      title: 'useRefNine',
      component:<VideoPlayer/>,
    },
    {
      title: 'useRefTen',
      component: <FormTwo/>,
    },
    {
      title: 'useRedOne',
      component: <TareasRed/>,
    },
    {
      title: 'useRedTwo',
      component: <CounterRed/>,
    },
    {
      title: 'useRedThree',
      component: <ItiReducer/>,
    },
    {
      title: 'useRedFour',
      component: <TodoList username='Dave'/>,
    },
    {
      title: 'useRedFive',
      component: <TodoListStateReducer username='Taylor'/>,
    },
    {
      title: 'useCall',
      component: <Main/>,
    },
    {
      title: 'useCallTwo',
      component: <UserDetail userId={'63740fede2c75d8744f80a3f'}/>,
    },
    {
      title: 'apiFetchArrow',
      component: <ApiFetchArrow id={3} url={API_URL}/>,
    },
    {
      title: 'apiFetchFunc',
      component: <ApiFetchFunc id={3} url={API_URL}/>,
    },
    {
      title: 'apiFetchCall',
      component: <ApiFetchCall id={3} url={API_URL}/>,
    },
    {
      title: 'Api React Query',
      component: <ApiRQuery />,
    },
    // {
    //   title: 'Form Test Vitest',
    //   component: <RegisterForm />,
    // },
  ]
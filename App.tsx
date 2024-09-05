import { StatusBar } from 'react-native'

import{
  useFonts,
  Ubuntu_700Bold,
  Ubuntu_500Medium,
  Ubuntu_400Regular 
} from '@expo-google-fonts/ubuntu'

import { Home } from '@/app/home';
import { Loading } from '@/app/loading';

export default function App() {
  const[fontsLoaded] = useFonts({
    Ubuntu_700Bold,
    Ubuntu_500Medium,
    Ubuntu_400Regular
  })

  if(!fontsLoaded){
    return <Loading />
  }
  return <Home />
}
import './styles.css'
import RootProvider from './core/providers/RootProvider'
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./core/router/AppRouter";
import i18n from "./core/config/i18n" //Import the config file
// Internationalization --> i18n
function App() {

  return (
    <RootProvider>
      <RouterProvider router={appRouter} />
    </RootProvider>
  )
}

export default App

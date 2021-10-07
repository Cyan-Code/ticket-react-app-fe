import { useContext, useEffect } from "react"
import { UiContext } from "../context/uiContext"

export const useHideMenu = ( ocultar ) => {

  const { showMenu, hiddenMenu } = useContext(UiContext)

  useEffect(() => {
    if(ocultar){
      hiddenMenu();
    } else {
      showMenu()
    }
  }, [ocultar, hiddenMenu, showMenu])

}

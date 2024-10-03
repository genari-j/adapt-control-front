import { useState } from 'react'

export const useGeneralStates = () => {
  const [showModal, setShowModal] = useState(false)
  const [passwordState, setPasswordState] = useState(false)

  const handleChangeModalVisibility = () => setShowModal(!showModal)
  const handleShowPassword = () => setPasswordState(prevState => !prevState)

  return {
    showModal,
    handleChangeModalVisibility,
    passwordState,
    handleShowPassword
  }
}

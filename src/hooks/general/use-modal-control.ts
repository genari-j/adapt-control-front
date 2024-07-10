import { useState } from 'react'

export const useModalControl = () => {
  const [showModal, setShowModal] = useState(false)

  const handleChangeModalVisibility = () => setShowModal(!showModal)

  return {
    showModal,
    handleChangeModalVisibility
  }
}

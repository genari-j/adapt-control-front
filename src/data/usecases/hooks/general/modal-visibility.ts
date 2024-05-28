import { useState } from 'react'

export const useModalVisibility = () => {
  const [showModal, setShowModal] = useState(false)

  const handleChangeModalVisibility = () => setShowModal(!showModal)

  return {
    showModal,
    handleChangeModalVisibility
  }
}

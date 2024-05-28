// import { AxiosResponse } from 'axios'
// import { Dispatch, SetStateAction, ChangeEvent } from 'react'
// import { UseQueryResult } from 'react-query'
// import { Link } from 'react-router-dom'

// import { paths } from '~/main/config'

// import { IconBtn, TextField } from '~/presentation/components'

// import { BiSearchAlt } from 'react-icons/bi'
// import { HiOutlinePlusSm } from 'react-icons/hi'

// import {
//   Container,
//   SearchInputContainer,
//   SearchInputWidth,
//   RegisterNewUser
// } from './styles'

// interface FiltersProps<T> {
//   data: UseQueryResult<AxiosResponse<T>>
//   filters: T
//   setFilters: Dispatch<SetStateAction<T>>
// }

// export const Filters = <T extends Record<string, any>>({ data, filters, setFilters }: FiltersProps<T>) => {
//   const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target
//     console.log('Filters before update:', filters);
//     setFilters({ ...filters, [name]: String(value) });
//     console.log('Filters after update:', filters);
//     await data.refetch()
//   }

//   return (
//     <Container>
//       <SearchInputContainer>
//         <SearchInputWidth>
//           <TextField
//             type='email'
//             aria-label='Busca'
//             label='Busca'
//             placeholder='Digite aqui sua busca'
//             name='code'
//             onChange={handleInputChange}
//           />
//         </SearchInputWidth>
//         <IconBtn
//           variant='bgGreen8'
//           width='sm'
//           size='xl2'
//           radius='sm'
//           color='white9'
//         >
//           <BiSearchAlt />
//         </IconBtn>
//       </SearchInputContainer>

//       <RegisterNewUser>
//         <Link to={`${paths.studentsClass}`}> <i><HiOutlinePlusSm /></i> Nova turma </Link>
//       </RegisterNewUser>
//     </Container>
//   )
// }

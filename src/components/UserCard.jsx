import React from 'react'
import "./styles/UserCard.css"

const UserCard = ({user, deleteUser, setUpdatingUser, handleClickShowModal}) => {

  const handleClickEdit = () => {
    setUpdatingUser(user)
    handleClickShowModal()
  }

  return (
    <article className='userCard'>
      <h3 className='userCard__fullName'>{user.first_name} {user.last_name}</h3>
      <hr className='userCard__separator' />
      <ul className='userCard__list'>
        <li className='userCard__item'><span>Email</span> {user.email}</li>
        <li className='userCard__item'>
        <span>Birthday</span>
          <div>
            <i className='userCard__item-icon bx bx-gift'></i> {user.birthday}
          </div>
        </li>
      </ul>
      <hr className='userCard__separator' />
      <footer className='userCard__footer'>
        <button className='userCard__footer-btn-trash' onClick={() => deleteUser(user.id)}><i className='bx bx-trash'></i></button>
        <button className='userCard__footer-btn-edit' onClick={handleClickEdit}><i className='bx bx-pencil'></i></button>
      </footer>
    </article>
  )
}

export default UserCard
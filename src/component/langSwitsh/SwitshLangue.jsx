import React from 'react'

const SwitshLangue = ({onLangueChange}) => {
    const handelClick = (e)=>{
        e.preventDefault()
        onLangueChange(e.currentTarget.dataset.lang)
        // console.log(e.currentTarget.dataset.lang)

    }
  return (
    <ul>
        <li><a data-lang="AR" onClick={handelClick} href="" >arabic</a></li>
        <li><a data-lang="FR" onClick={handelClick} href="">englais</a></li>
        <li><a data-lang="EN" onClick={handelClick} href="">francais</a></li>
        <li><a data-lang="ES" onClick={handelClick} href="">espaniol</a></li>
    </ul>
  )
}

export default SwitshLangue

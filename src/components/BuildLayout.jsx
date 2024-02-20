import React from 'react'

const BuildLayout = () => {
    const data = {
        cardTitle: 'React Basics',
        cardDescription: 'React is a JavaScript Library. It is based on Components as the building block.',
        button: {url: 'https://github.com/peetlucas',
        label: 'Go to my GitHub repository',
                }
    }
  return (
    <div className="card m-5">
        <div className="card-body">
            <h5 className="card-title">{data.cardTitle}</h5>
            <p className="card-text">{data.cardDescription}</p>
            <a href={data.button.url} className="btn btn-primary">{data.button.label}
            </a>
        </div>
    </div>
  )
}

export default BuildLayout
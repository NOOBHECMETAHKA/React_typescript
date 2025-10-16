interface CardComponentProps {
  title: string,
  picture?: string,
  price: number
}

function Card({ title, picture, price }: CardComponentProps) {
  return (
    <div className="card m-1" style={{ width: "45%" }}>
      <img src={picture} className="card-img-top" alt="..." />
      <div className="card-header">
          <h5 className='fs-1 text-dark'>{title}</h5>
      </div>
      <div className="card-body">
        <div className='m-1'>
          <p className="card-text"><b className='fs-3 text-secondary'>{price}</b> РУБЛЕЙ</p>
        </div>
      </div>
    </div>
  )
}

export default Card;

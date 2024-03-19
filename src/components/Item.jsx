import { NavLink } from 'react-router-dom';

export default function Item(props) {
    return(
        <div className='fondo2 cursor-pointer w-56 h-60 rounded-lg relative border'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5 flex justify-center items-center'>
                    {props.item.category.name}
                </span>
                <img src={props.item.pictureUrl} alt={`${props.item.title}`} className='w-full h-full object-contain rounded-lg' />
            </figure>
            <p className='flex justify-between px-1'>
                <span className='text-sm font-light'>
                    {props.item.title.length > 25 ? (title.substring(0, 24)) + '...' : props.item.title}
                </span>
                <span className='text-lg font-medium'>${props.item.price}</span>
                <NavLink to={`/item/${props.item.id}`}>Ver Detalle</NavLink>
            </p>
        </div>
    );
}
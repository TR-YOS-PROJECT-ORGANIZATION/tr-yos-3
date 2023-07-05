import React from 'react'

const HomeFooter = () => {
  return (
    <>
    <div className="bg-rose flex justify-start h-96 pt-10">
        <div className='p-11 pr-20'>
            <p className='text-black pb-2 text-sm w-52 py-2 px-4 mb-3'>Adress</p>
            <p className="bg-darkBlue text-white rounded-full italic font-bold w-52 py-2 px-4 mb-3"><span>P</span> +90 555 333 55 33</p>
            <p className="bg-darkBlue text-white rounded-full font-bold w-52 py-2 px-4"><span>M</span> info@tryös.com</p>
        </div>


        <div className='p-11 pr-20'>
            <p className='text-white pb-2 font-semibold'>Navigations</p>
            <p className='pb-2'><a className='text-darkBlue text-sm font-medium' href="">About Us</a></p>
            <p className='pb-2'><a className='text-darkBlue text-sm font-medium' href="">FAQs Page</a></p>
            <p className='pb-2'><a className='text-darkBlue text-sm font-medium' href="">Checkout</a></p>
            <p className='pb-2'><a className='text-darkBlue text-sm font-medium' href="">Contact</a></p>
            <p className='pb-2'><a className='text-darkBlue text-sm font-medium' href="">Blog</a></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam doloremque minus tempora. Eveniet recusandae quasi quibusdam eligendi omnis iste cumque unde ad aperiam sed! Beatae impedit aut ipsam soluta unde natus omnis incidunt, corporis laborum eligendi quia magni fugit atque nisi nesciunt nostrum deleniti repudiandae! Repudiandae quia minima fugiat necessitatibus laboriosam. Incidunt dicta pariatur consequatur harum ipsa et optio suscipit exercitationem! Totam iste similique delectus ducimus laborum commodi tenetur nobis quasi vero accusamus, tempora odit quis recusandae. Unde minus velit, quos sapiente fugit quasi odit dolorem dolorum iste qui fugiat corrupti nisi dicta autem, quo, animi totam eligendi dolor laboriosam.</p>
        </div>


        <div className='p-11 pr-20'>
            <p className='text-white pb-2 font-semibold'>My Acoount</p>
            <p className='pb-2'><a className='text-darkBlue pb-2 text-sm font-medium' href="">My Profile</a></p>
            <p className='pb-2'><a className='text-darkBlue pb-2 text-sm font-medium' href="">My Account</a></p>
            <p className='pb-2'><a className='text-darkBlue pb-2 text-sm font-medium' href="">Favorites</a></p>
        </div>
    </div>


        <p className='text-center bg-rose text-white text-sm font-medium pb-4'><span>&</span> 2023. All Rights Reserved</p>
    </>
  )
}

export default HomeFooter
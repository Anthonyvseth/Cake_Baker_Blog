import { NavLink } from 'react-router-dom'

export const aboutObj= {
    lightbg: true,
    lightTextDesc: true,
    topLine: 'Who am I',
    headline: 'About me',
    description: 'This cake is made with buttercream flowers. Learn how to make this design and a wonderfully tasting cake!',
    buttonLabel: 'follow my social',
    imgStart: '',
    img: '/images/AVS01991.png',
    alt: 'photo'
}

export const homeObjOne = {
    lightbg: true,
    lightTextDesc: true,
    topLine: '',
    headline: 'Flower Cake',
    description: "The flowers on this cake is made with swiss meringue buttercream. It is simple yet elegant. This was my most popular Mother's Day cake, but could also make a perfect birthday cake. The flavor of the cake and buttercream are customizable." ,
    buttonLabel: <NavLink to={'/posts/5fb31d4f2f286a8b7a1f2a6b'}>Comment</NavLink>,
    imgStart: '',
    img: '/images/FlowerCake.png',
    alt: 'photo'
}
export const homeObjTwo = {
    lightbg: true,
    lightTextDesc: true,
    topLine: '',
    headline: 'Hennessy Cake',
    description: "This cake is for those 21+ only! The buttercream is a swiss meringue buttercream infused with Hennessy topped with chocolate ganache and caramel drips. Strawberries are included and also infused! Yum!",
    // buttonLabel: <NavLink to={}>Comment</NavLink>,
    imgStart: '',
    img: '/images/HennessyCake.png',
    alt: 'photo'
}
export const homeObjThree = {
    lightbg: true,
    lightTextDesc: true,
    topLine: '',
    headline: 'Pony Cake',
    description: " This Pony Cake is made with a chocolate swiss meringue butter cream to achieve the color of a brown pony. The facial features are made with fondant and the hair is piped with buttercream using a variety of piping tips.",
    // buttonLabel: <NavLink to={}>Comment</NavLink>,
    imgStart: '',
    img: '/images/PonyCake.png',
    alt: 'photo'
}
export const homeObjFour = {
    lightbg: true,
    lightTextDesc: true,
    topLine: '',
    headline: 'Minnie Mouse Cake',
    description: " __  ",
    // buttonLabel: <NavLink to={}>Comment</NavLink>,
    imgStart: '',
    img: '/images/MineyMouseCake.png',
    alt: 'photo'
}
export const homeObjFive = {
    lightbg: true,
    lightTextDesc: true,
    topLine: '',
    headline: `My Mom's Birthday Cake`,
    description: "  ___  ",
    // buttonLabel: <NavLink to={}>Comment</NavLink>,
    imgStart: '',
    img: '/images/MyMomsBdayCake.png',
    alt: 'photo'
}


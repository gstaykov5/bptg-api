const jwt = require('jsonwebtoken');
const { Router } = require('express');
const userService = require('../services/userService');

const router = Router();

router.post('/register', async (req, res) => {
    const {fullname, username, email, password, confirmPassword, lastModifieDate, avatar, role, registrationDate, acceptTerms} = req.body;
    const userData = {fullname, username, email, password, confirmPassword, lastModifieDate, avatar, role, registrationDate, acceptTerms};

    try {
        const user = await userService.register(userData);
        const {accessToken} = await userService.login(userData.email, userData.password);
        res.status(200).json({
            id: user.id,
            email: user.email,
            username: user.username,
            favorites: user.favorites,
            avatar: user.avatar,
            role: user.role,
            accessToken
        });
    } catch (error) {
        res.json({
            type: error,
            message: error.message
        })
    }

});

router.post('/login', async (req, res) => {
    const logIn = req.body

    try {
        const {user, accessToken} = await userService.login(logIn.email, logIn.password);

        res.json({
            id: user._id,
            email: user.email,
            username: user.username,
            favorites: user.favorites,
            avatar: user.avatar,
            role: user.role,
            accessToken
        });
    } catch (error) {
        res.json({
            type: error,
            message: error.message
        })
    }
});

router.post('/edit/:id', async (req, res) => {
    const id = req.params.id
    const { data, updateFavorites, push_pull } = req.body;
   
    try {
        const { user, accessToken } = await userService.update(id, data, updateFavorites, push_pull);

        res.json({
            id: user._id,
            email: user.email,
            username: user.username,
            favorites: user.favorites,
            avatar: user.avatar,
            role: user.role,
            accessToken
        });
    } catch (error) {
        console.log('userControler-login error:', error.message)
        res.json({
            type: error,
            message: error.message
        })
    }
})

module.exports = router;



// const createToken = (id) => {
//     return jwt.sign({id}, 'georgi staykov super secret token', {
//         expiresIn: '1d'
//     })
// }

// const handleErrors = err => {
//     const errors = { email: '', password: '',};

//     if(err.code === 11000) {
//         errors.email = 'Email is already registered!';
//         return errors;
//     }

//     return errors;
// }

// module.exports.register = async (req, res) => {
//     const user = await new RegisterModel(req.body);

//     try {
//         await user.save();
//         res.send(user);
//         res.status(201).json({user: user._id, created: true});
//     } catch (error) {
//         console.log(error);
//         res.status(500).send(error);
//         const errors = handleErrors(error);
//         res.json({ errors, created: false })
//     }
// };

// module.exports.login = async (req, res) => {
//     const user = await new LoginModel(req.body);

//     try {
//         console.log(user)
//         const token = createToken(user._id);
    
//         res.cookie('jwt', token, {
//             withCredentials: true,
//             httpOnly: false,
//         });
//         res.status(200).json({user: user._id, created: true});
//     } catch (error) {
//         console.log(error);
//         const errors = handleErrors(error);
//         res.json({ errors, created: false })
//     }
// };
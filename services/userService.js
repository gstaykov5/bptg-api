const RegisterModel = require('../models/registerUser');
const jwt = require('jsonwebtoken');

exports.register = userData => RegisterModel.create(userData);

exports.login = async (email, password) => {
    const user = await RegisterModel.findOne({email, password});

    if (user) {
        const accessToken = jwt.sign({id: user._id, email: user.email}, 'GStaykov super secret token');

        return {user, accessToken};
    } else {
        return {message: 'User not found'};
    }
}

exports.update = async (id, itemToEdit, updateFavorites, push_pull) => {
    if (updateFavorites) {
        push_pull === 'push'
            ? await RegisterModel.findByIdAndUpdate(id, {$addToSet: {favorites: itemToEdit}})
            : await RegisterModel.findByIdAndUpdate(id, {$pull: {favorites: itemToEdit}})
    } else {
        await RegisterModel.findByIdAndUpdate(id, itemToEdit);
    }
    const user = await RegisterModel.findOne({id})
    const accessToken = jwt.sign({id: user._id, email: user.email}, 'GStaykov super secret token');

    return { user, accessToken };
    // console.log(user)
}

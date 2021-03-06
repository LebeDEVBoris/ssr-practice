class Portfolio {
    constructor(model, user) {
        this.Model = model
        this.user = user
        this.writeRights = ['instructor', 'admin']
    }

    getAll() {
        return this.Model.find({})
    }

    getById(id) {
        return this.Model.findById(id)
    }

    getAllByUser() {
        return this.Model.find({ user: this.user._id }).sort({
            startDate: 'desc',
        })
    }

    create(data) {
        if (!this.user || !this.writeRights.includes(this.user.role)) {
            throw new Error('Not authorize')
        }
        data.user = this.user
        return this.Model.create(data)
    }

    findAndUpdate(id, data) {
        return this.Model.findOneAndUpdate({ _id: id }, data, { new: true })
    }

    findAndDelete(id) {
        return this.Model.findOneAndRemove({ _id: id })
    }
}

module.exports = Portfolio

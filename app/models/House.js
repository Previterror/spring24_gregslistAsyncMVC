export class House {

    constructor(data) {
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.creatorId = data.creatorId
        this.creator = data.creator
        this.createdAt = new Date(data.createdAt)
    }

    // bedrooms: Number, required
    // bathrooms: Number, required
    // levels: Number, required
    // imgUrl: String, 
    // year: Number, required
    // price: Number, required
    // description: String, 
    // creatorId: String (References Account Id), required
    // *creator: Object (Virtual Added by Database)
    // *createdAt: ISO Timestamp (Virtual Added by Database)
    // *updatedAt: ISO Timestamp (Virtual Added by Database)

    get HouseCard() {
        return `
<div class="col-12 col-md-6">
    <div class="card">
        <img class="card-img-top" src="${this.imgUrl}" alt="Image of ${this.year} ${this.bedrooms} bedroom house.">
        <div class="card-body">
            <h4 class="card-title">${this.year} ${this.bedrooms} bed ${this.bathrooms} bath for $${this.price}</h4>
            <p class="card-text">${this.description}</p>
            <div class="d-flex justify-content-between align-items-center">
                <p class="fw-bold fs-4">Listed by ${this.creator.name}</p>
                <div>
                    <span class="text-secondary me-2"></span>
                    <img class="profile-picture profile-picture-sm" src="${this.creator.picture}"
                        alt="an image of ${this.creator.name}">
                </div>
            </div>
            <div class="text-secondary">Listed on ${this.createdAt.toDateString()}</div>
        </div>
    </div>
</div>
`
    }



}
export interface AccountAttributes {
    id?: number;
    accountType: "User" | "Administrator";
    status: string;
    registrationDate?: Date;
    UserId?: number;
    AdministratorId?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface ProfileAttributes {
    id?: number;
    firstName: string;
    lastName: string;
    phone?: string;
    UserId?: number;
    AdministratorId?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface UserAttributes {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    registrationDate?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface AdministratorAttributes {
    id?: number;
    adminName: string;
    email: string;
    password: string;
    registrationDate?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface PhotoAttributes {
    id?: number;
    path: string;
    description?: string;
    isMain?: boolean;
    ProfileId?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface AddressAttributes {
    id?: number;
    address: string;
    city: string;
    zipCode: string;
    region?: string;
    state?: string;
    other?: string;
    CountryId?: number;
    ProfileId?: number;
    UserOrderId?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface SupportAttributes {
    id?: number;
    title: string;
    body: string;
    statusClose?: boolean;
    statusAnswer?: boolean;
    answer?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface MessageAttributes {
    id?: number;
    text: string;
    room: number;
    status?: boolean;
    isRead?: boolean;
    UserId?: number;
    AdministratorId?: number;
    SupportId?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface CategoryAttributes {
    id?: number;
    categoryName: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface InstrumentAttributes {
    id?: number;
    instrumentName: string;
    description?: string;
    CategoryId?: number;
    ManufacturerId?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface ItemAttributes {
    id?: number;
    serialNumber: string;
    yearOfProduction?: number;
    price: number;
    characteristics?: string;
    rewiwes?: string;
    rating?: number;
    availability?: boolean;
    description?: string;
    warranty?: string;
    photo?: string;
    discount?: number;
    discountEndDate?: Date;
    discountStartDate?: Date;
    InstrumentId?: number;
    CountryId?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface CartAttributes {
    id?: number;
    sessionId?: string;
    status?: number;
    firstName?: string;
    lastName?: string;
    mobile?: string;
    UserId?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface CartItemAttributes {
    id?: number;
    price: number;
    discount?: number;
    active?: boolean;
    CartId?: number;
    ItemId?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface UserOrderAttributes {
    id?: number;
    deliveryAddress?: string;
    totalPrice?: number;
    discount?: number;
    finalPrice?: number;
    active?: boolean;
    UserId?: number;
    OrderStatusId?: number;
    AddressId?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface OrderStatusAttributes {
    id?: number;
    statusName: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface TransactionAttributes {
    id?: number;
    mode?: number;
    status?: number;
    UserId?: number;
    OrderItemId?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface OrderItemAttributes {
    id?: number;
    price: number;
    discount?: number;
    UserOrderId?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface CountryAttributes {
    id?: number;
    countryName: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface ManufacturerAttributes {
    id?: number;
    manufactureName: string;
    contactInfo?: string;
    webSite?: string;
    email?: string;
    phone?: string;
    CountryId?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
//# sourceMappingURL=index.d.ts.map
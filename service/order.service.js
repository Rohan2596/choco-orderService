class OrderService{

    placeOrder=(orderDto,next)=>{
        try {
            console.log(orderDto);
        } catch (error) {
            next(error)
        }
    };
    editOrderPlaced=(editOrderDto,next)=>{
        try {
            console.log(editOrderDto);
        } catch (error) {
            next(error)
        }
    };
    getAOrderPlaced=(orderDto,next)=>{
        try {
            console.log(orderDto);
        } catch (error) {
            next(error)
        }
    };
    getAllCustomerOrder=(orderDto,next)=>{
        try {
            console.log(orderDto);
        } catch (error) {
            next(error)
        }
    }


}
module.exports=new OrderService();

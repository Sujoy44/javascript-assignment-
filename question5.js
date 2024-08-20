let packageType = "standard";  // can be "standard", "express", or "overnight"

let deliveryTime;

switch(packageType) {
    case "standard":
        deliveryTime = "3-5 days";
        break;
    case "express":
        deliveryTime = "1-2 days";
        break;
    case "overnight":
        deliveryTime = "next day";
        break;
    default:
        deliveryTime = "unknown";
        break;
}

console.log(`The package will be delivered in: ${deliveryTime}`);

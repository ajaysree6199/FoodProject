import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceapiService {

  constructor( private http:HttpClient) { }

//   API Part

  items:any[]=[
    
    {
        "id":5,
        "name":"Chicken Wings",
        "description":"Chicken wings are a popular choice for appetizers, snacks, or party food. They have become a staple in many cuisines and are enjoyed by people around the world. Whether you're ordering them at a restaurant, preparing them at home, or enjoying them at a social gathering, chicken wings are a versatile and crowd-pleasing dish",
        "type":"nv",
        "img":"../../assets/MenuItems/Chicken Wings.png",
        "price":180,
        "rating":4.5

    },
    {
        "id":4,
        "name":"Chicken Rice",
        "description":"Chicken rice is a dish featuring chicken and rice as its main elements. In Hainanese Chicken Rice, popular in Southeast Asia, poached chicken is served with fragrant rice and dipping sauces. In Western cuisine, chicken and rice casseroles often involve baked chicken with rice, vegetables, and sauces.",
        "type":"nv",
        "img":"../../assets/MenuItems/ChickenRice.png",
        "price":150,
        "rating":4.1

    },
    {
        "id":3,
        "name":"Roasted Beef",
        "description":"Roasted beef is a dish made by cooking beef in an oven or over an open flame, often after marinating or seasoning the meat. The process of roasting involves dry heat, resulting in a flavorful exterior and a juicy interior. Roasted beef can be served in various cuts, such as prime rib, tenderloin, or sirloin.",
        "type":"nv",
        "img":"../../assets/MenuItems/Roasted Beef.png",
        "price":280,
        "rating":4.0

    },
    {
        "id":2,
        "name":"Salmon Fish Fry",
        "description":"Salmon fish fry is a dish that involves frying salmon fillets or steaks after seasoning them with various herbs and spices. The process typically includes coating the salmon in a mixture of spices or a marinade before pan-frying or deep-frying until the fish is cooked through and the exterior is crispy. ",
        "type":"nv",
        "img":"../../assets/MenuItems/Salmon Fish.png",
        "price":190,
        "rating":4.1

    },
    {
        "id":1,
        "name":"Roasted Chicken",
        "description":"Roasted chicken is a versatile dish that can be served on its own as a comforting family dinner or as the centerpiece of a festive occasion. The skin provides a satisfying crunch, and the meat, whether white or dark, offers a succulent and savory experience. It pairs well with a variety of sides, from roasted vegetables to mashed potatoes, making it a beloved and timeless dish enjoyed in households worldwide.",
        "type":"nv",
        "img":"../../assets/MenuItems/Roasted Chick.png",
        "price":240,
        "rating":4.2

    },
   
    {
        "id":8,
        "name":"Egg toast",
        "description":"Egg Toast is a simple yet satisfying dish that begins with a slice of bread, typically with the center removed to create a hole. The bread is then toasted or roasted to a golden brown. A fresh egg is cracked into the center of the hole and cooked until the whites are set but the yolk remains runny. The result is a delicious combination of crispy toast, creamy egg yolk, and the savory element of meat, which can be bacon, ham, or sausage, depending on your preference.",
        "type":"nv",
        "img":"../../assets/MenuItems/Egg toast.png",
        "price":120,
        "rating":4.1

    },
    {
        "id":9,
        "name":"Fried chicken",
        "description":"Fried chicken is a beloved comfort food enjoyed worldwide, and various cultures have their own unique takes on this classic dish. It can be served as a main course, in sandwiches, or as bite-sized pieces like chicken tenders or nuggets. Accompaniments often include side dishes like coleslaw, mashed potatoes, or biscuits.",
        "type":"nv",
        "img":"../../assets/MenuItems/fried chicken.png",
        "price":210,
        "rating":4.5

    },
    {
        "id":11,
        "name":"Chicken Biryani",
        "description":" Marinated meat or vegetables, caramelized onions, and a touch of yogurt are layered with the partially cooked rice, forming a harmonious union of textures and tastes. The dish is then slow-cooked to perfection, allowing the ingredients to meld together, resulting in a mouthwatering culinary masterpiece that is both satisfying and deeply satisfying to the senses.",
        "type":"nv",
        "img":"../../assets/MenuItems/Chicken Biryani.png",
        "price":250,
        "rating":4.5

    },
    {
        "id":12,
        "name":"Dosa",
        "description":"Dosa, a South Indian classic, is a thin, crispy pancake made from fermented rice and urad dal batter. Golden-brown and tangy, it's a versatile delight often paired with coconut chutney and sambar. Perfect for breakfast or a satisfying snack, dosa is a beloved staple in Indian cuisine.",
        "type":"v",
        "img":"../../assets/MenuItems/Dosa.png",
        "price":35,
        "rating":4.1

    },
    {
        "id":13,
        "name":"Chicken Momos",
        "description":" Chicken momos are savory dumplings originating from Tibetan and Nepali cuisines. Filled with a seasoned mixture of minced chicken, garlic, and spices, these dumplings are either steamed or pan-fried for a deliciously tender or crispy texture. Often served with a zesty dipping sauce, chicken momos are a popular and flavorful appetizer in Asian cuisine.",
        "type":"nv",
        "img":"../../assets/MenuItems/Chickenmomos.png",
        "price":180,
        "rating":4.3

    },
    {
        "id":15,
        "name":"Veg Salad",
        "description":"A veg salad is a refreshing and nutritious dish made primarily from a variety of fresh vegetables. Typically served raw, the salad may include ingredients such as crisp lettuce, juicy tomatoes, crunchy cucumbers, colorful bell peppers, shredded carrots, and other seasonal vegetables.",
        "type":"v",
        "img":"../../assets/MenuItems/Veg Salad.png",
        "price":130,
        "rating":4.0

    },
    {
        "id":16,
        "name":"Squid Fry",
        "description":"Squid fry is a delicious seafood dish featuring tender squid rings coated in a seasoned batter and deep-fried until golden and crispy. The squid is often marinated with a mix of spices, garlic, and ginger to enhance its flavor before being coated in a light batter, which may include ingredients like flour or cornstarch.",
        "type":"nv",
        "img":"../../assets/MenuItems/SquidFry.png",
        "price":150,
        "rating":4.5

    },
    {
        "id":17,
        "name":"Chicken Burger",
        "description":" A chicken burger is a popular and satisfying fast-food item that features a seasoned and grilled or fried chicken patty sandwiched between soft burger buns. The chicken patty is often made from ground or minced chicken meat mixed with various spices and herbs for added flavor",
        "type":"nv",
        "img":"../../assets/MenuItems/ChickenBurger.png",
        "price":280,
        "rating":4.0

    },
    {
        "id":18,
        "name":"Fish BBQ",
        "description":"The preparation typically involves marinating the fish with a flavorful blend of spices, herbs, and often a citrus element like lemon or lime juice. Commonly used fish varieties for BBQ include salmon, trout, tilapia, or halibut, each offering a unique taste and texture.",
        "type":"nv",
        "img":"../../assets/MenuItems/Fish BBq.png",
        "price":180,
        "rating":4.2

    },
    {
        "id":19,
        "name":"Chicken Pizza",
        "description":"Chicken pizza is a flavorful and popular variation of traditional pizza that features succulent pieces of chicken as a key topping. The pizza typically starts with a base of tomato sauce and melted cheese on a pizza crust. Marinated and cooked chicken pieces are then added as a protein-rich topping.",
        "type":"nv",
        "img":"../../assets/MenuItems/ChicPiz.png",
        "price":228,
        "rating":3.7

    },
    {
        "id":20,
        "name":"Prawn Fry",
        "description":"Once marinated, the prawns are pan-fried or deep-fried until they develop a golden-brown crust, creating a delightful contrast with the tender and juicy interior. Prawn fry is often served as an appetizer or a main course, accompanied by a side of lemon wedges or a dipping sauce. ",
        "type":"nv",
        "img":"../../assets/MenuItems/Prawnfry.png",
        "price":190,
        "rating":4.1

    },
    {
        "id":24,
        "name":"Roasted Pork",
        "description":"The roasting process not only enhances the natural sweetness of the pork but also creates a delightful contrast between the savory outer layer and the juicy, flavorful core. This dish is a celebration of simplicity, allowing the inherent goodness of the pork to shine. Whether enjoyed on its own or paired with complementary accompaniments, Roasted Pork is an invitation to savor the timeless and irresistible appeal of perfectly roasted meat",
        "type":"nv",
        "img":"../../assets/MenuItems/Roasted Pork.png",
        "price":190,
        "rating":3.5

    },
    {
        "id":23,
        "name":"Pasta",
        "description":"Boiled to al dente perfection, pasta becomes a canvas for a symphony of flavors. It eagerly embraces rich and hearty ragù, basks in the simplicity of olive oil and garlic, or dances with vibrant and fresh tomato-based sauces. The versatility of pasta knows no bounds, offering a harmonious marriage of texture and taste",
        "type":"v",
        "img":"../../assets/MenuItems/pasta.png",
        "price":120,
        "rating":3.9

    },
    



]

getFoodItems() {
    return this.items;
  }

  getFoodItem(id: number) {
    return this.items.find(item => item.id === id);
  }
}

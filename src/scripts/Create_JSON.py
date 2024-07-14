import json
import os

# Original data with added "store" parameter
data = [
    
    #FRUITS

    {"name": "Peaches 1 LB", "price": 1.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "Red Cherries 1 LB", "price": 3.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "Pineapples Golden Ripe", "price": 2.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "Cantaloupes", "price": 2.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "Strawberries 454 G", "price": 2.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "Raspberries 170 G", "price": 3.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "Blueberries Pint", "price": 3.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "Lemons (2 LB Bag)", "price": 3.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "Limes (1 LB Bag)", "price": 2.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "Clementines 2 LB Bag", "price": 3.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "Kiwis 600 G", "price": 3.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "Watermelon Seedless", "price": 5.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "Plums (Ontario Yellow) 1.5 L", "price": 5.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "Pears (Bartlett / Forelle)", "price": 1.88, "category": "Fruits", "store": "Food Basics"},
    {"name": "Grapes (Red / Green)", "price": 3.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "Mangoes", "price": 0.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "Avocados (Bag of 5 or 6)", "price": 4.88, "category": "Fruits", "store": "Food Basics"},
    {"name": "Grapefruits 3 LB Bag", "price": 4.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "Banana", "price": 0.59, "category": "Fruits", "store": "Food Basics"},
    {"name": "Apples (Gala, Red Prince, Ambrosia, Honeycrisp, McIntosh, Red Delicious) 3 LB Bag", "price": 4.98, "category": "Fruits", "store": "Food Basics"},


    #VEGETABLES

    {"name": "Seedless Cucumbers", "price": 1.5, "category": "Vegetables", "store": "Food Basics"},
    {"name": "Mini Cucumbers 397 G", "price": 2.88, "category": "Vegetables", "store": "Food Basics"},
    {"name": "Tomatoes Hothouse 1 LB", "price": 1.88, "category": "Vegetables", "store": "Food Basics"},
    {"name": "Tomatoes on the Vine 1 LB", "price": 1.98, "category": "Vegetables", "store": "Food Basics"},
    {"name": "Tomatoes Large Beefsteak", "price": 1.48, "category": "Vegetables", "store": "Food Basics"},
    {"name": "Broccoli Crowns", "price": 1.98, "category": "Vegetables", "store": "Food Basics"},
    {"name": "Cauliflower", "price": 3.98, "category": "Vegetables", "store": "Food Basics"},
    {"name": "Eggplant LB", "price": 1.68, "category": "Vegetables", "store": "Food Basics"},
    {"name": "Potatoes (Sweet / Purple) 1 LB", "price": 1.28, "category": "Vegetables", "store": "Food Basics"},
    {"name": "Potatoes (Russet / Red / Yellow) 5 LB", "price": 3.98, "category": "Vegetables", "store": "Food Basics"},
    {"name": "Asparagus 1 LB", "price": 2.98, "category": "Vegetables", "store": "Food Basics"},
    {"name": "Carrots 2 LB Bag", "price": 1.98, "category": "Vegetables", "store": "Food Basics"},
    {"name": "Zucchini 1 LB", "price": 1.98, "category": "Vegetables", "store": "Food Basics"},
    {"name": "Romaine Hearts Pkg of 3", "price": 3.98, "category": "Vegetables", "store": "Food Basics"},
    {"name": "Lettuce (Red or Green Leaf)", "price": 1.98, "category": "Vegetables", "store": "Food Basics"},
    {"name": "Peppers (Sweet Assorted) Pkg of 4", "price": 4.98, "category": "Vegetables", "store": "Food Basics"},
    {"name": "Green Beans 350 G", "price": 3.77, "category": "Vegetables", "store": "Food Basics"},
    {"name": "Green Giant Sugar Snap or Snow Peas 170 - 227 G", "price": 3.98, "category": "Vegetables", "store": "Food Basics"},
    {"name": "Kale", "price": 1.98, "category": "Vegetables", "store": "Food Basics"},
    {"name": "Vidalia Yellow Onions 3 LB Bag", "price": 3.98, "category": "Vegetables", "store": "Food Basics"},
    {"name": "Onions Red 7 LB Bag", "price": 8.98, "category": "Vegetables", "store": "Food Basics"},
    {"name": "Portobellini Mushrooms 334 G", "price": 4.88, "category": "Vegetables", "store": "Food Basics"},
    {"name": "Mushrooms (Whole White or Cremini) 454 G", "price": 3.98, "category": "Vegetables", "store": "Food Basics"},
    {"name": "Tofu 454 G", "price": 2.49, "category": "Vegetables", "store": "Metro"},
    {"name": "Okra 1 LB", "price": 3.99, "category": "Vegetables", "store": "Chalo FreshCo"},
    {"name": "Bitter Gourd (Karela) 1 LB", "price": 5.49, "category": "Vegetables", "store": "Walmart"},
    {"name": "Sweet Corn Pkg of 4", "price": 3.98, "category": "Vegetables", "store": "Food Basics"},



    #Staples


    {"name": "Bread (White/Whole Dempsters) 675 G", "price": 2.22, "category": "Staples", "store": "Freshco"},
    {"name": "Bread (Whole Grain Dempsters) 600 G", "price": 2.98, "category": "Staples", "store": "Food Basics"},
    {"name": "Pasta (Penne Primo) 900 G", "price": 2.50, "category": "Staples", "store": "Metro"},
    {"name": "Rice (Jasmine) 8 KG", "price": 13.99, "category": "Staples", "store": "No Frills"},
    {"name": "Rice (Parboiled Nupak) 8 KG", "price": 12.99, "category": "Staples", "store": "Freshco"},
    {"name": "Olive Oil (Extra Virgin) 750 ML", "price": 8.98, "category": "Staples", "store": "Food Basics"},
    {"name": "Ketchup (No Name) 1 L", "price": 3.29, "category": "Staples", "store": "No Frills"},
    {"name": "Ketchup (French) 1 L", "price": 4.49, "category": "Staples", "store": "Food Basics"},
    {"name": "Mayonnaise (Hellman) 890 ML", "price": 5.77, "category": "Staples", "store": "Walmart"},
    {"name": "Mustard (Great Value) 890 ML", "price": 1.27, "category": "Staples", "store": "Walmart"},
    {"name": "Sunflower Oil (Unico) 3 L", "price": 9.99, "category": "Staples", "store": "Highland Farms"},
    {"name": "Flour (All Purpose No Name) 2.5 KG", "price": 4.49, "category": "Staples", "store": "Loblaws"},
    {"name": "Peanut Butter (No Name) 1 KG", "price": 4.29, "category": "Vegetables", "store": "No Frills"},
    {"name": "Juice (Tropicana Orange) 2.63 L", "price": 5.99, "category": "Vegetables", "store": "Metro"},


   
    #Dairy and Eggs

    {"name": "Milk (Lactania) 4 L", "price": 3.98, "category": "Dairy and Eggs", "store": "Food Basics"},
    {"name": "Greek Yogurt (Liberte) 750 G", "price": 5.87, "category": "Dairy and Eggs", "store": "Food Basics"},
    {"name": "Yogurt or Dahi 750 G", "price": 2.49, "category": "Dairy and Eggs", "store": "FreshCo"},
    {"name": "Eggs (Compliments Large 30 PK)", "price": 7.99, "category": "Dairy and Eggs", "store": "FreshCo"},
    {"name": "Skyr 750 G", "price": 4.99, "category": "Dairy and Eggs", "store": "Food Basics"},
    {"name": "Butter (No Name) 454 G", "price": 4.99, "category": "Dairy and Eggs", "store": "Shoppers Drug Mart"},
    {"name": "Margarine (No Name) 907 G", "price": 4.99, "category": "Dairy and Eggs", "store": "Loblaws"},
    {"name": "Cheese (Compliments Shredded) 320 G", "price": 3.97, "category": "Dairy and Eggs", "store": "Sobeys"},
    {"name": "Ice Cream (Chapman Premium)", "price": 3.99, "category": "Dairy and Eggs", "store": "Loblaws"},
    {"name": "Ghee (Brar) 800 G", "price": 13.99, "category": "Dairy and Eggs", "store": "Chalo FreshCo"},
    {"name": "Cottage Cheese (Neilson) 500 G", "price": 3.49, "category": "Dairy and Eggs", "store": "Shoppers Drug Mart"},
    {"name": "Whipping Cream (Neilson) 473 ML", "price": 3.98, "category": "Dairy and Eggs", "store": "Shoppers Drug Mart"},
    {"name": "Sour Cream (Neilson's) 500 ML", "price": 3.49, "category": "Dairy and Eggs", "store": "Shoppers Drug Mart"},



    #MEAT

    {"name": "Chicken Breast Boneless Skinless 1 LB", "price": 5.99, "category": "Meat", "store": "Metro"},
    {"name": "Chicken Breast Bone-In 1 LB", "price": 2.98, "category": "Meat", "store": "Walmart"},
    {"name": "Chicken Whole 1 LB", "price": 2.49, "category": "Meat", "store": "Loblaws"},
    {"name": "Chicken Drumsticks 1 LB", "price": 2.99, "category": "Meat", "store": "Food Basics"},
    {"name": "Beef (Ground Lean) 1 LB", "price": 4.99, "category": "Meat", "store": "Longos"},
    {"name": "Pork (Loin, Rib, Sirloin) 1 LB", "price": 1.99, "category": "Meat", "store": "No Frills"},
    {"name": "Ham (Roasted Mastro) 100 G", "price": 2.99, "category": "Meat", "store": "Metro"},
    {"name": "Bacon (No Name) 500 G", "price": 5.00, "category": "Meat", "store": "No Frills"},
    {"name": "Smoked Turkey Breast (Selection) 100 G", "price": 2.49, "category": "Meat", "store": "Metro"},
    {"name": "Atlantic Salmon Fillet 1 LB", "price": 9.77, "category": "Meat", "store": "No Frills"},
    {"name": "Coho Salmon Fillet 1 LB", "price": 11.99, "category": "Meat", "store": "Food Basics"},
    {"name": "Shrimp Raw 300 G", "price": 7.99, "category": "Meat", "store": "Metro"},


    #Household Supplies

    {"name": "Purex Laundry Detergent (4.43 L 110 Loads)", "price": 8.88, "category": "Household Supplies", "store": "No Frills"},
    {"name": "Tide Liquid Laundry Detergent (3.9 L 94 Loads)", "price": 20.99, "category": "Household Supplies", "store": "FreshCo"},
    {"name": "Dawn Dishwashing Liquid (473 ML)", "price": 2.49, "category": "Household Supplies", "store": "Real Canadian Superstore"},
    {"name": "Clorox (1.27 L)", "price": 3.97, "category": "Household Supplies", "store": "Walmart"},
    {"name": "Paper Towel (Bounty 4 Rolls)", "price": 7.99, "category": "Household Supplies", "store": "Real Canadian Superstore"},
    {"name": "Toilet Paper (Royale 30 Pack 2-Ply)", "price": 12.97, "category": "Household Supplies", "store": "Walmart"},
    {"name": "Garbage Bags (Glad Tall 45 L, 30 Bags)", "price": 8.99, "category": "Household Supplies", "store": "No Frills"},
    {"name": "Hand Soap (Softsoap 1.47 L)", "price": 4.50, "category": "Household Supplies", "store": "No Frills"},
    {"name": "Toothpaste (Colgate Max Fresh) 100 ml", "price": 0.99, "category": "Household Supplies", "store": "Rexall"},


]

# Additional parameters
last_updated_date = "2024-07-14"
city = "Toronto"

# Define file path (relative path one level up)
file_path = "src/data/data_july_14.json"

# Check if file_path is an absolute path, if not, make it absolute
if not os.path.isabs(file_path):
    file_path = os.path.abspath(file_path)
    
print(file_path)

# Convert to JSON format
# Prepare data in required JSON format
json_data = []
id = 0
for item in data:
    id = id +1
    json_item = {
        "id" : id,
        "category": item["category"],
        "price": "${:.2f}".format(item["price"]),
        "name": item["name"],
        "lastUpdatedDate": last_updated_date,
        "store": item["store"],
        "city":  "Brampton" if item["store"] == 'Chalo FreshCo' else "Toronto" 
    }
    #print(json_item)
    json_data.append(json_item)
# Write JSON data to file

os.makedirs(os.path.dirname(file_path), exist_ok=True)

with open(file_path, "w") as json_file:
    json.dump(json_data, json_file, indent=4)


print(f"JSON data saved to: {file_path}")

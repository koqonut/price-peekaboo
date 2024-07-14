import json
import os

# Original data with added "store" parameter
data = [
    
    #FRUITS
    {"name": "PEACHES 1 LB", "price": 1.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "RED CHERRIES 1 LB", "price": 3.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "PINEAPPLES GOLDEN RIPE ", "price": 2.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "CANTALOUPES", "price": 2.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "STRAWBERRIES 454 G", "price": 2.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "RASPBERRIES 170 G", "price": 3.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "BLUEBERRIES PINT", "price": 3.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "LEMONS (2 LB BAG)", "price": 3.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "LIMES (1 LB BAG)", "price": 2.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "CLEMENTINES 2 LB BAG", "price": 3.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "KIWIS 600 G", "price": 3.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "WATERMELON SEEDLESS", "price": 5.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "PLUMS (ONTARIO YELLOW) 1.5 L", "price": 5.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "PEARS (BARTLETT / FORELLE)", "price": 1.88, "category": "Fruits", "store": "Food Basics"},
    {"name": "PEARS FORELLE", "price": 1.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "GRAPES (RED / GREEN)", "price": 3.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "MANGOES", "price": 0.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "AVOCADOS (BAG OF 5 OR 6)", "price": 4.88, "category": "Fruits", "store": "Food Basics"},
    {"name": "GRAPEFRUITS 3 LB BAG", "price": 4.98, "category": "Fruits", "store": "Food Basics"},
    {"name": "BANANA", "price": 0.59, "category": "Fruits", "store": "Food Basics"},
    {"name": "APPLES (GALA, RED PRINCE, AMBROSIA, HONEYCRISP, McINTOSH, RED DELICIOUS) 3 LB BAG", "price": 4.98, "category": "Fruits", "store": "Food Basics"},

    #VEGETABLES
    {"name": "SEEDLESS CUCUMBERS", "price": 1.5, "category": "Vegetables", "store": "Food Basics"},
    {"name": "MINI CUCUMBERS 397 G", "price": 2.88, "category": "Vegetables", "store": "Food Basics"},
    {"name": "TOMATOES HOTHOUSE 1 LB", "price": 1.88, "category": "Vegetables", "store": "Food Basics"},
    {"name": "TOMATOES ON THE VINE 1 LB", "price": 1.98, "category": "Vegetables", "store": "Food Basics"},
    {"name": "TOMATOES LARGE BEEFSTEAK", "price": 1.48, "category": "Vegetables", "store": "Food Basics"},
    {"name": "BROCCOLI CROWNS", "price": 1.98, "category": "Vegetables", "store": "Food Basics"},
    {"name": "CAULIFLOWER", "price": 3.98, "category": "Vegetables", "store": "Food Basics"},
    {"name": "EGGPLANT LB", "price": 1.68, "category": "Vegetables", "store": "Food Basics"},
    {"name": "POTATOES (SWEET / PURPLE) 1 LB", "price": 1.28, "category": "Vegetables", "store": "Food Basics"},
    {"name": "POTATOES (RUSSET / RED / YELLOW) 5 LB", "price": 3.98, "category": "Vegetables", "store": "Food Basics"},
    {"name": "ASPARAGAS 1 LB", "price": 2.98, "category": "Vegetables", "store": "Food Basics"},
    {"name": "CARROTS 2 LB BAG", "price": 1.98, "category": "Vegetables", "store": "Food Basics"},
    {"name": "ZUCCHINI 1 LB", "price": 1.98, "category": "Vegetables", "store": "Food Basics"},
    {"name": "ROMAINE HEARTS PKG OF 3", "price": 3.98, "category": "Vegetables", "store": "Food Basics"},
    {"name": "LETTUCE (RED OR GREEN LEAF)", "price": 1.98, "category": "Vegetables", "store": "Food Basics"},
    {"name": "PEPPERS (SWEET ASSORTED) PKG OF 4", "price": 4.98, "category": "Vegetables", "store": "Food Basics"},
    {"name": "GREEN BEANS 350 G", "price": 3.77, "category": "Vegetables", "store": "Food Basics"},
    {"name": "GREEN GIANT SUGAR SNAP OR SNOW PEAS 170 - 227 G", "price": 3.98, "category": "Vegetables", "store": "Food Basics"},
    {"name": "KALE", "price": 1.98, "category": "Vegetables", "store": "Food Basics"},
    {"name": "VIDALIA YELLOW ONIONS 3 LB BAG", "price": 3.98, "category": "Vegetables", "store": "Food Basics"},
    {"name": "ONIONS RED  7 LB BAG", "price": 8.98, "category": "Vegetables", "store": "Food Basics"},
    {"name": "PORTOBELLINI MUSHROOMS 334 G", "price": 4.88, "category": "Vegetables", "store": "Food Basics"},
    {"name": "MUSHROOMS (WHOLE WHITE OR CREMINI) 454 G", "price": 3.98, "category": "Vegetables", "store": "Food Basics"},
    {"name": "TOFU 454 G ", "price": 2.49, "category": "Vegetables", "store": "Metro"},
    {"name": "OKRA 1 LB ", "price": 3.99, "category": "Vegetables", "store": "Chalo Freshco"},
    {"name": "BITTER GOURD (KARELA) 1 LB ", "price": 5.49, "category": "Vegetables", "store": "Walmart"},
    {"name": "SWEET CORN PKG OF 4", "price": 3.98, "category": "Vegetables", "store": "Food Basics"},


    #Staples
    {"name": "BREAD (WHITE/WHOLE DEMPSTERS) 675 G ", "price": 2.22, "category": "Staples", "store": "Freshco"},
    {"name": "BREAD (WHOLE GRAIN DEMPSTERS) 600 G ", "price": 2.98, "category": "Staples", "store": "Food Basics"},
    {"name": "PASTA  (PENNE PRIMO) 900 G ", "price": 2.50, "category": "Staples", "store": "Metro"},
    {"name": "RICE (JASMINE) 8 KG ", "price": 13.99, "category": "Staples", "store": "No Frills"},
    {"name": "RICE (PARBOILED NUPAK) 8 KG ", "price": 12.99, "category": "Staples", "store": "Freshco"},
    {"name": "OLIVE OIL (EXTRA VIRGIN) 750 ML ", "price": 8.98, "category": "Staples", "store": "Food Basics"},
    {"name": "KETCHUP (NO NAME) 1 L ", "price": 3.29, "category": "Staples", "store": "No Frills"},
    {"name": "KETCHUP (FRENCH) 1 L ", "price": 4.49, "category": "Staples", "store": "Food Basics"},
    {"name": "MAYONNAISE (HELLMAN) 890 ML ", "price": 5.77, "category": "Staples", "store": "Walmart"},
    {"name": "MUSTARD (GREAT VALUE) 890 ML ", "price": 1.27, "category": "Staples", "store": "Walmart"},
    {"name": "SUNFLOWER OIL (UNICO) 3 L ", "price": 9.99, "category": "Staples", "store": "Highland Farms"},
    {"name": "FLOUR (ALL PURPOSE NO NAME) 2.5 KG ", "price": 4.49, "category": "Staples", "store": "Loblaws"},
    {"name": "PEANUT BUTTER (NO NAME) 1 KG ", "price": 4.29, "category": "Vegetables", "store": "No Frills"},
    {"name": "JUICE (TROPICANA ORNAGE) 2.63 L ", "price": 5.99, "category": "Vegetables", "store": "Metro"},

   
    #Dairy and Eggs
    {"name": "MILK (LACTANIA) 4 L ", "price": 3.98, "category": "Dairy and Eggs", "store": "Food Basics"},
    {"name": "GREEK YOGURT (LIBERTE) 750 G", "price": 5.87, "category": "Dairy and Eggs", "store": "Food Basics"},
    {"name": "YOGURT OR DAHI 750 G", "price": 2.49, "category": "Dairy and Eggs", "store": "Freshco"},
    {"name": "EGGS (COMPLIMENTS LARGE 30 PK) ", "price": 7.99, "category": "Dairy and Eggs", "store": "Freshco"},
    {"name": "SKYR 750 G ", "price": 4.99, "category": "Dairy and Eggs", "store": "Food Basics"},
    {"name": "BUTTER (NO NAME) 454 G ", "price": 4.99, "category": "Dairy and Eggs", "store": "Shoppers drug mart"},
    {"name": "MARGARINE (NO NAME) 907 G ", "price": 4.99, "category": "Dairy and Eggs", "store": "Loblaws"},
    {"name": "CHEESE (COMPLIMENTS SHREDDED) 320 G ", "price": 3.97, "category": "Dairy and Eggs", "store": "Sobeys"},
    {"name": "ICE CREAM (CHAPMAN PREMIUM) ", "price": 3.99, "category": "Dairy and Eggs", "store": "Loblaws"},
    {"name": "GHEE (BRAR) 800 G ", "price": 13.99, "category": "Dairy and Eggs", "store": "Chalo Freshco"},
    {"name": "COTTAGE CHEESE (NEILSON) 500 G ", "price": 3.49, "category": "Dairy and Eggs", "store": "Shoppers Drug Mart"},
    {"name": "WHIPPING CREAM (NEILSON) 473 ML ", "price": 3.98, "category": "Dairy and Eggs", "store": "Shoppers Drug Mart"},
    {"name": "SOUR CREAM (NEILSON's) 500 ML ", "price": 3.49, "category": "Dairy and Eggs", "store": "Shoppers Drug Mart"},

    #MEAT
    {"name": "CHICKEN BREAST BONELESS SKINLESS) 1 LB ", "price": 5.99, "category": "Meat", "store": "Metro"},
    {"name": "CHICKEN BREAST BONE-IN ) 1 LB", "price": 2.98, "category": "Meat", "store": "Walmart"},
    {"name": "CHICKEN WHOLE ) 1 LB", "price": 2.49, "category": "Meat", "store": "Loblaws"},
    {"name": "CHICKEN DRUMSTICKS  1 LB ", "price": 2.99, "category": "Meat", "store": "Food Basics"},
    {"name": "BEEF (GROUND LEAN) 1 LB ", "price": 4.99, "category": "Meat", "store": "Longos"},
    {"name": "PORK (LOIN, RIB, SIRLOIN) 1 LB", "price": 1.99, "category": "Meat", "store": "No Frills"},
    {"name": "HAM (ROASTED MASTRO) 100 G", "price": 2.99, "category": "Meat", "store": "Metro"},
    {"name": "BACON (NO NAME) 500 G", "price": 5.00, "category": "Meat", "store": "No Frills"},
    {"name": "SMOKED TURKEY BREAST (SELECTION) 100 G", "price": 2.49, "category": "Meat", "store": "Metro"},
    {"name": "ATLANTIC SALMON FILLET 1 LB", "price":9.77, "category": "Meat", "store": "No Frills"},
    {"name": "COHO SALMON FILLET 1 LB", "price":11.99, "category": "Meat", "store": "Food Basics"},
    {"name": "SHRIMP RAW 300 G", "price":7.99, "category": "Meat", "store": "Metro"},


    #Household Supplies
    {"name": "PUREX LAUNDRY DETERGENT ( 4.43 L 110 LOADS) ", "price": 8.88, "category": "Household Supplies", "store": "No Frills"},
    {"name": "TIDE LIQUID LAUNDRY DETERGENT ( 3.9 L 94 LOADS) ", "price": 20.99, "category": "Household Supplies", "store": "Freshco"},
    {"name": "DAWN DISHWASHING LIQUID ( 473 ML) ", "price": 2.49, "category": "Household Supplies", "store": "Real Canadian Superstore"},
    {"name": "CLOROX ( 1.27 L) ", "price": 3.97, "category": "Household Supplies", "store": "Walmart"},
    {"name": "PAPER TOWEL (BOUNTY 4 ROLLS) ", "price": 7.99, "category": "Household Supplies", "store": "Real Canadian Superstore"},
    {"name": "TOILET PAPER (ROYALE  30 PACK 2-PLY ) ", "price": 12.97, "category": "Household Supplies", "store": "Walmart"},
    {"name": "GARBAGE BAGS (GLAD TALL 45 L, 30 BAGS ", "price": 8.99, "category": "Household Supplies", "store": "No Frills"},
    {"name": "HAND SOAP (SOFTSOAP 1.47 L)", "price": 4.50, "category": "Household Supplies", "store": "No Frills"},
]

# Additional parameters
last_updated_date = "2024-07-14"
city = "Toronto"

# Define file path (relative path one level up)
file_path = "src/data/data_july_12.json"

# Check if file_path is an absolute path, if not, make it absolute
if not os.path.isabs(file_path):
    file_path = os.path.abspath(file_path)
    
print(file_path)

# Convert to JSON format
# Prepare data in required JSON format
json_data = []
for item in data:
    json_item = {
        "category": item["category"],
        "price": "${:.2f}".format(item["price"]),
        "name": item["name"],
        "lastUpdatedDate": last_updated_date,
        "store": item["store"],
        "city": city
    }
    #print(json_item)
    json_data.append(json_item)
# Write JSON data to file

os.makedirs(os.path.dirname(file_path), exist_ok=True)

with open(file_path, "w") as json_file:
    json.dump(json_data, json_file, indent=4)


print(f"JSON data saved to: {file_path}")

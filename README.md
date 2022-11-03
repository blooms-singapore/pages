# Guide

- [Settings](https://github.com/blooms-singapore/pages/tree/master/settings) - Configure app settings
- [Services](https://github.com/blooms-singapore/pages/tree/master/en/services) - Service content

### Services

- **lastSlot**: Last service timeslot for the day
- **startPrice**: Starting price override. Eg. Start from xxx
- **options**:
  ```
  "standard": { // Specify unique key
    "label": "Standard",
    "displayLabel": "Hour", // Appear in info (Optional, if not set will use 'label')
    "orderLabel": "Hour (Standard)", // Appear in order summary (Optional, if not set will use 'label')
    "description": "Label standard", // Not used at the moment
    "cost": { // Specify cost for each currency
      "SGD": "x",
      "MYR": "x"
    },
    "quantity": {
      "label": "Hour", // Label display beside select
      "min": 0, // Min. value
      "max": 0, // Max. value, set 0 for no limit
      "increment": 30, // Value to increase. Eg. Increase by 30 min.
      "default": 60, // Default value
      "base": 60 // To calculate option cost. Eg. 300 (min) / 60 (base) = 5 (quantity)
    }
  }
  ```
- **types**:
  ```
  "house": { // Specify unique key
    "label": "House Type",
    "description": "Label standard", // Not used at the moment
    "values": {
    "condo": {
      "label": "Condominium",
      "orderLabel": "Condo Surcharge", // Appear in order summary (Optional, if not set will use 'label')
      "cost": { // Specify cost for this type, related to options
        "SGD": "x",
        "MYR": "x"
      },
      "oneOffCost": { // Specify one off charges for this type
        "SGD": "x",
        "MYR": "x"
      }
    }
  }
  ```

### Price Calculation Examples:

First thing is find quantity first: _300 (min) / 60 (options.quantity.base) = 3_

#### 3 hours standard cleaning (Condo):

```
180 (min) / 60 (options.quantity.base) x 27.5 (options.cost) + 10 (types...oneOffCost) = 92.5
```

#### 5 hours deep cleaning (Landed):

```
300 (min) / 60 (options.quantity.base) x 40 (options.cost) + ((300 (min) / 60 (options.quantity.base)) x 40 (types...cost)) = 400
```

#### how to use show more and show less button

```
<div class="show-hide-text">
	<!-- any content goes here -->
</div>

<button class="read-more-button" >Show More</button>
```

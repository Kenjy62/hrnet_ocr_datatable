# Features

> Display Data <br/>
> Search into data <br/>
> Pagination System <br/>
> Filter by asc / desc <br/>
> Select a number of data display <br/>

# How to install

```bash
npm install rhnet-datatable-simple
```

# How to use

Import a component to your project with :

```jsx
import Datatable from "rhnet-datatable-simple";
```

Use in your project with :

```jsx
<Datatable data={yourData} />
```

# How to set Data

> yourData is a JSON object like that :

```json
[
  {
    "firstname": "John",
    "lastname": "Doe",
    "startdate": "2022-12-06",
    "department": "Engineering",
    "birthdate": "1997-12-06",
    "street": "01 Rue de la rue",
    "city": "InCity",
    "state": "FR",
    "zipcode": "00001",
    "id": 1
  },
  {
    "firstname": "Simon",
    "lastname": "Rotchield",
    "startdate": "2009-07-24",
    "department": "Marketing",
    "birthdate": "2000-05-24",
    "street": "54 Avenue Robert",
    "city": "Paris",
    "state": "FM",
    "zipcode": "58740",
    "id": 2
  }
]
```

# Warning

For this version, your data must contain {firstname, lastname, startdate, department, birthdate, street, city, state, zipcode, id} keys. The style is not editable or you can't edit into a index.js of component.

# By Default

This datable display 5 objects by firstname asc.

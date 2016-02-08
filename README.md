# datacontainer
Simple data containers from JSON files (light version of LDP)

Built on top of [json-to-ldp](https://github.com/nicola/json-to-ldp)

## Idea

Given a database, one should be able to navigate data in this way:

```
GET /people/
--
{
  contains: ["adam", "nicola"]
}
```

```
GET /people/nicola
--
{
  name: "Nicola",
  surname: "Greco"
}
```

```
PUT /people/nicola/geo
--
{
  lat: 10.47,
  lon: 33.86
}
```

```
GET /people/nicola
{
  contains: ["geo"],
  name: "Nicola",
  surname: "Greco"
}
```

In this implementation we use memory and JSON to represent the data.
In this particular example the database consisted of:

```
{ 
  people: {
    nicola: {
      name: "Nicola",
      surname: "Greco"
    },
    adam: {
      name: "Adam",
      surname: "Yala"
    }
  }
}
```
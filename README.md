# datacontainer

> Containers for data

Built on top of [jsonpointers](https://tools.ietf.org/html/rfc6901), [json merge patch](https://tools.ietf.org/html/rfc7386) and [json-to-ldp](https://github.com/nicola/json-to-ldp)

Play with it in the [playground](http://nicola.io/datacontainer-playground/)

## Idea

### APIs

#### .get(url, cb)
#### .set(url, json, cb)
#### .update(url, json, cb)


### HTTP requests

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
PUT /people/nicola/geo '{ lat: 10.47, lon: 33.86 }'
PATCH /people/nicola '{ name: "Nick" }'
GET /people/nicola
{
  contains: ["geo"],
  name: "Nick",
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

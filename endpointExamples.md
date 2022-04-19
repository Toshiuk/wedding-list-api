# Use cases

## List items

get /items -> list items
Verificar se o item foi comprado, assim assinalando que não é possivel, ou removendo da lista.

## Guest bought an item

get /guests/:codigo -> verificar se o user existe
se nao existe, informa ao usuario
se existe, verificar no param "bought" se ele ja comprou
Se sim, informa o usuario,
se nao:
put /guests/:codigo ->
atualizar estes params
{
"bought": true,
"dateBought": data da compra,
"itemBought": id do item
}

put /items/:idDoItem ->
atualizar estes params
{
"bought": true
}

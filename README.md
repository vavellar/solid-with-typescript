# solid-with-typescript

5 Princípios

Flexibilidade, menos rígido, menos frágil, mais fácil de manter e evoluir

1 - SRP 

Single responsability priciple

Separar coisas que MUDAM POR MOTIVOS DIFERENTES

2 - OCP

Open/Closed Principle

Devemos estar fechados para modificação e abertos para extensão

3 - Liskov Substitution Principle

Se S (Beer, Whisky, Water) é subclasse de T (Item), em um programa, deve ser possível substituir instâncias de T (Item) por instâncias de S(Beer, Whisky, Water)
SEM QUEBRAR O FUNCIONAMENTO DO PROGRAMA

Pré-condições não podem ser fortalecidas
- Deixando de aceitar entradas que a superclasse considera válida

Pós-condições não podem ser enfraquecidas
- Aceitando saídas mais amplas

Invariantes devem se manter consistentes
- Se uma subclasse permitir que o estado conceitual da hierarquia de classe fique inválido

4 - Interface Segregation Principle

Cuidado com interfaces MUITO ABRANGENTES, não obrigue subclasses a implementar métodos que elas não precisam

5 - Dependency Inversion Principle

Módulos de alto nível(ex: Interfaces. Quanto mais próximo das regras de negócio maior o nível) não devem depender de módulos de baixo nivel(Ex: banco de dados, filesystem)
Ambos devem depender de abstrações
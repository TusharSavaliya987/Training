//Mapped Types
/*1. Introduction to Mapped Types
Mapped types in TypeScript allow us to create new types by transforming existing ones, 
making it possible to dynamically modify or adapt type structures. 
They are especially useful for scenarios where we need to apply consistent rules 
or changes to the properties of an existing type.

For example:

Converting all properties of a type to optional.
Making all properties read-only.
Applying transformations to property values.
These operations are achieved through TypeScript's utility types (like Partial, Readonly, Record, etc.) or custom implementations.

2. Why Mapped Types Are Useful
Dynamic Adjustments: Instead of rewriting types manually, mapped types automate transformations.
Improved Maintainability: Centralized transformations reduce code duplication and simplify updates.
Enhanced Type Safety: They enforce consistent type rules across a codebase.
 */

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type Features = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type FeatureOptions = OptionsFlags<Features>;


// Removes 'optional' attributes from a type's properties:-
type Concrete<Type> = {
    [Property in keyof Type]-?: Type[Property];
  };
  
  type MaybeUser = {
    id: string;
    name?: string;
    age?: number;
  };
  
  type User = Concrete<MaybeUser>;

  
//Key Remapping via as :- In TypeScript 4.1 and onwards, you can re-map keys in mapped types with an as clause in a mapped type:
type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};
 
interface Person {
    name: string;
    age: number;
    location: string;
}
 
type LazyPerson = Getters<Person>;


//Mapping Over Unions:-
type EventConfig<Events extends { kind: string }> = {
    [E in Events as E["kind"]]: (event: E) => void;
  };
  
  type SquareEvent = { kind: "square"; x: number; y: number };
  type CircleEvent = { kind: "circle"; radius: number };
  
  type Config = EventConfig<SquareEvent | CircleEvent>;

//Further Exploration:- 
type ExtractPII<Type> = {
    [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
  };
   
  type DBFields = {
    id: { format: "incrementing" };
    name: { type: string; pii: true };
  };
   
  type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;
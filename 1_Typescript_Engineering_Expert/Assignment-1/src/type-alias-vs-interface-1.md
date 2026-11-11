## interface ব্যবহার করে কাজ করা গেলে সেখানে type alias ব্যবহার করবো না। interface দিয়ে কাজ করার চেষ্টা করবো

# Type alias and interface এর মধ্যে পার্থক্য:

* Union, complex type তৌরি করতে type ব্যবহার করতে পারি And Object structure তৌরি করতে interface ব্যবহার করতে পারি

* Same নামের দুইটা interface create করলে marge হয়ে একটা হয়ে যায় And Same নামে দুইটা type create করলে error হবে এজন্য আলাদা নামে তৌরি করে & দিয়ে Marge করতে পারি 


## কখন একটির পরিবর্তে অন্যটি ব্যবহার করতে পারি?: 

# Object structure:
* যখন object structure তৌরি করার প্রয়োজন হয় তখন interface ব্যবহার করতে পারি ।
* Same name এর দুটো structure লাগলে interface ব্যবহার করতে পারি ।


# Union type:
* Union type ব্যবহার করার প্রয়োজন হলে type alias ব্যবহার করতে পারি 

* **Example**
```
type isStatus = "user" | "admin" | "member";
type status = "success":
```
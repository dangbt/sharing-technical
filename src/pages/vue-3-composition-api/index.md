---
title: "Vue 3 Composition API"
date: "2020-04-12"
---
## Example
```
<template>
  <div>
    <p>Spaces Left: {{ spacesLeft }} out of {{ capacity }}</p>
    <h2>Attending</h2>
    <ul>
      <li v-for ="(name, index) in attending" : key ="index">
      {{ name }}
      </li>
    </ul>
    <button @ click ="increaseCapacity()">Increase Capacity</button>
  </div>
</template>
<script>
import { ref, computed } from "vue";

## If using Vue 2 with Composition API plugin configured:
// import { ref, computed } from "@vue/composition-api";

export default {
  setup() {
    const capacity = ref( 4 ); //## Reactive Reference  ## Wraps primitives in an object to track changes
    const attending = ref(["Tim", "Bob", "Joe"]);
    const spacesLeft = computed(() => {
    return capacity.value - attending.value.length;
    });
    function increaseCapacity() { // ## Methods declared as functions
    capacity.value++;
    }
    return { capacity, attending, spacesLeft, increaseCapacity }; //  ## Gives our template access to these objects & functions
  }
};
</script>
```

```
  Use the composition API when: The component is too large, and should be organized by logical concerns(feature).
  AND / OR
  Code needs to be extracted and reused across mulitiple components, as an alternative to Mixins/Scoped Slots.
  AND / OR
  Type safety in TypeScript is important.
```

## Can alse be written as:

```
import { reactive, computed, toRefs } from "vue";
export default {
  setup() {
    const event = reactive({ //  ## Reactive takes an object and returns a reactive object
      capacity:  4 ,
      attending: ["Tim", "Bob", "Joe"],
      spacesLeft: computed(() => { return event.capacity - event.attending.length; })
    });
    function increaseCapacity() {
      event.capacity++;
    }
    //## Notice we don’t have to use.value since the object is reactive
    return { ...toRefs(event), increaseCapacity }; // ## toRefs creates a plain object with reactive references
  }
};
```

## TO ORGANIZE BY FEATURE:

```
<template> ... </template>
<script>
export default {
  setup() {
    const productSearch = useSearch(      )
    const resultSorting = useSorting({      })
    return { productSearch, resultSorting }
  }
}

function useSearch(getResults) { 

}
function useSorting({ input, options }) { 

}
</script>
```

## TO EXTRACT SHARED CODE:
```
<template> ... </template>
<script>
import useSearch from '@use/search'
import useSorting from '@use/sorting'
export default {
  setup() {
  const productSearch = useSearch(      )
  const resultSorting = useSorting({      })
  return { productSearch, resultSorting }
  }
}
</script>
```

## use/search.js

```
export default function useSearch(getResults) { 

}
```

## use/sorting.js
```
export default function useSorting({ input, options }) { 

}
```


## The setup() method

```
Called after beforeCreate hook and before created hook.
Does not have access to this.
```

## props: The first optional argument of setup:
```
export default {
  props: {
    name: String
  },
  setup(props) {
  watch(() => {
  console.log(`name is: ` + props.name)
    })
  }
}
```



## context: The second optional argument of setup:

```
setup(props, context) {
  context.attrs;
  context.slots;
  context.emit;
}
```

## life-cycle hooks: Declare them inside setup

```
setup() {
  onMounted(() => { ... });
  onUpdated(() => { ... });
  onUnmounted(() => { ... });
}
Instead of using beforeCreate or created hooks, just
write code or call functions inside setup() instead.
```


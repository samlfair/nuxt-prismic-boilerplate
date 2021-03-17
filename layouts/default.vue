<template>
  <div class="layout-default-outer">
    <div class="layout-default-inner">
      <Nuxt />
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-default-outer {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 18px;
  display: flex;
  width: 100vw;
  justify-content: center;
}

.layout-default-inner {
  width: 100%;
  max-width: 900px;
  padding: 20px 10px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

::v-deep {
  // Style slices in here
  .slice-post-feed {
    .post {
      border: 1px solid black;
      padding: 1em 1em 0;
      margin: 1em 0;
    }
  }
  .slice-text-block {
    & > * {
      padding-bottom: 1em;
    }
  }

  .slice-image-row {
    .slice-image-row-caption {
      & > * {
        margin: 1em 0 1em;
      }
      text-align: center;
      color: grey;
      font-style: oblique;
      font-weight: 200;
      font-size: 0.9rem;
    }
    .image {
      background: lightgrey;
    }
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>

<template>
  <Layout>
    <p>Hi there I'm Adrian.</p>
    <p>I build web apps...</p>
    <p>...like this one</p>
    <section class="relative mb-32">
      <div class="absolute z-0 opacity-30">
        <g-image src="~/assets/images/map-dirs.png" />
      </div>
      <div class="relative z-10">


      <h2 class="text-4xl font-extrabold text-gray-600">Expo layout tool / Indoor mapping</h2>
      <p>It's a full tradeshow layout builder. It's built with Leaflet.js and runs on Rails.</p>
      <p>The Expo map is a private, internal app so I can't give you a link</p>
      <p>But here's a quick walkthrough below <sup><a href="#footnote">*</a></sup> </p>
      <div class="px-56">
        <g-image src="~/assets/images/map.png" />
      </div>

      <h2 class="text-4xl font-extrabold text-gray-600">Ecosystem</h2>.
      <div class="px-56">
        <p>The app is part of this larger system of tools. Data flows in the from the public site (Exhibitors sign up for the show).
          The manager creates the layout. And then the staff use the map to setup the show.
        </p>
        <g-image src="~/assets/images/map-flow.png" />
      </div>
      </div>

      <div class="flex p-4 space-x-4 overflow-hidden" style="max-height: 400px">
        <div class="w-1/3 overflow-hidden rounded shadow-lg">
          <g-image src="~/assets/images/map-controller.png"></g-image>
        </div>
        <div class="w-1/3 overflow-hidden rounded shadow-lg">
          <g-image src="~/assets/images/map-haml.png"></g-image>
        </div>
        <div class="w-1/3 overflow-hidden rounded shadow-lg">
          <g-image src="~/assets/images/map-rotater-code.png"></g-image>
        </div>

      </div>
      <a id="footnote" class="text-sm">All code / screens shared with permission. All data fakered. </a>

    </section>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

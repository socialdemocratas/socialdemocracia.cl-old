<script>
    import Logo from '../assets/logo.svg'

    const shareData = {
    title: 'MDN',
    text: 'Learn web development on MDN!',
    url: 'https://developer.mozilla.org'
  }

  async function share() {
    try {
      await navigator.share(shareData)
      console.log('MDN shared successfully')
    } catch(err) {
      console.error('ErrorNoShare: ' + err)
    }
  }

</script>
<svelte:head>
        <title>Revista Socialdemocracia | SDCL</title>
</svelte:head>
<div>
    <header class="container m-auto text-center">
        <h1 class="font-bold text-size-[1.9em] sm:text-size-[2.5em] text-primary mt-5 mb-1" style="font-family: 'Bebas Neue';">SOCIALDEMOCRACIA</h1>
        <p class="font-light text-size-[0.8em] sm:text-size-[1em]">Una revista de 
            <span class="text-primary font-semibold"><img class="inline-block w-[1em] h-[1em]" src={Logo} alt="SDCL logo" /> SDCL</span></p>
    </header>
    <div class="container m-auto sm:grid sm:grid-cols-2">
        <section class="grid grid-cols-4 sm:grid-cols-2 gap-2 m-2">
            <article on:click={share} class="sectionBtn" style="background-image: url(/src/assets/actualidad.jpg);background-size:cover;background-position: center;">
                <a href="/articulo/2"><h1>Actualidad</h1></a>
            </article>
            <article class="sectionBtn" style="background-image: url(/src/assets/ensayos.jpg);background-size:cover">
                <h1>Ensayos</h1>
            </article>
            <article class="sectionBtn" style="background-image: url(/src/assets/opinion.jpg);background-size:cover">
                <h1>Opinión</h1>
            </article>
            <article class="sectionBtn !bg-primary text-white" style="background-image: url(/src/assets/nuevo-articulo.webp);background-size:cover">
                <h1>Envía tu artículo</h1>
            </article>
        </section>

        <section>
            <h1>Edición Marzo 2022 (progreso)</h1>
        </section>

    </div>
</div>

<style>
    .sectionBtn {
        background-size:cover;
        background-position: center;
        @apply
        inline-grid col-auto bg-secondary min-h-20 bg-blend-soft-light
        p-2 font-bold content-end rounded-sm
    }
</style>
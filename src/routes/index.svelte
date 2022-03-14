<script>
    import Logo from '../assets/logo.svg'
</script>
<div>
    <header class="container m-auto text-center">
        <h1 class="font-bold text-size-[1.7em] sm:text-size-[2.5em] text-primary mt-5 mb-1">SOCIALDEMOCRACIA</h1>
        <p class="font-light text-size-[0.9em] sm:text-size-[1.3em]">Una revista de <span class="text-primary"><img class="inline-block w-[1em] h-[1em]" src={Logo} alt="SDCL logo" />Socialdemócratas de Chile</span></p>
    </header>
    
    <main class="container m-auto grid grid-cols-2 sm:grid-cols-8 gap-2">
        <article class="inline-grid col-auto bg-secondary min-h-20 bg-blend-soft-light" style="background-image: url(/src/assets/actualidad.jpg);background-size:cover">
            <h1>Actualidad</h1>
        </article>
        <article class="inline-grid col-auto bg-secondary min-h-20 bg-blend-soft-light" style="background-image: url(/src/assets/opinion.jpg);background-size:cover">
            <h1>Opinión</h1>
        </article>
        <article class="inline-grid col-auto bg-secondary min-h-20 bg-blend-soft-light">
            <h1>Libertades civiles</h1>
        </article>
        <article class="inline-grid col-auto bg-secondary min-h-20 bg-blend-soft-light">
            <h1>Estado de bienestar</h1>
        </article>
        <article class="inline-grid col-auto bg-secondary min-h-20 bg-blend-soft-light" style="background-image: url(/src/assets/cambio-climatico.jpg);background-size:cover">
            <h1>Cambio climatico</h1>
        </article>
        <article class="inline-grid col-auto bg-primary min-h-20 bg-blend-soft-light">
            <h1>Envía tu artículo</h1>
        </article>
    </main>

</div>
<script>
    import ArticleNav from "$lib/ArticleNav.svelte";
    import Textarea from "$lib/Textarea.svelte";
    import { fly } from 'svelte/transition';
    import { slide } from 'svelte/transition';
	let commentsOpen = false;

    export let article;
</script>

<div class="container relative p-4 m-auto max-w-screen-md">

    <div class="page-header">
        <h1><a href="/">Socialdemocracia</a> • Opinión</h1>
    </div>

    <article>
        <header class="mb-5">
            <div class="mt-1 mb-1 relative">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Protestas_en_Chile_20191022_06.jpg" />
                <small class="portada-caption"><a href="https://commons.wikimedia.org/wiki/File:Protestas_en_Chile_20191022_06.jpg">Carlos Figueroa</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons</small>
            </div>
            <h1>Formemos un Chile socialdemocrata desde las bases-</h1>
            <div>
                <p>Rodrigo González (copiado de CIPER, solo usado para dev)</p>
                <p>2 de Mayo, 2022</p>
                <p>#{article.id}</p>
            </div>
        </header>

        <div class="content">
            <p>Hace algunas semanas, el senador Felipe Harboe se imaginaba una eventual amplia coalición que podría conformarse en la oposición y que incluyera liberales, progresistas y socialistas. Incluso mencionó insignes figuras del mundo social cristiano y el autonomismo de izquierda como eventuales integrantes de esta coalición (Gabriel Boric y Soledad Alvear). Además, el senador especificaba que el punto de encuentro de toda es amplia diversidad era el “paragua socialdemócrata”.</p>
            <p>No solo eso, para seguir dificultando la definición del concepto, el probable candidato presidencial de la derecha, Joaquín Lavín, también se definía como socialdemócrata en un programa de televisión, a la vez que proponía un gobierno de centro, para liderar el país. Al mismo, tiempo, de modo similar, algunos han planteado que el programa presidencial del Beatriz Sánchez también era un programa eminentemente socialdemócrata.</p>
            <p>En realidad, tal como ocurre con otros conceptos que se emplean con frecuencia en el debate público, el uso ha generado un significado propio lejano de su concepción original y, en general, bastante difuso (como ocurre con “populismo” o “neoliberalismo”). Así, cuando se usa el término socialdemocracia, la mayoría de los comentaristas y opinólogos se refieren a algo así como un reformismo moderado de centroizquierda. Lo ambiguo e impreciso del término permite incluir o excluir actores según la circunstancia lo amerite y, a ratos, desentenderse de las contradicciones que surgen. Pero ¿qué ocurriría si nos tomáramos en serio la idea de un programa socialdemócrata? ¿Cuándo podríamos decir que estamos ante un proyecto socialdemócrata, a diferencia de los múltiples posibles reformismos del espectro político?</p>
            <p>La socialdemocracia incluye una multiplicidad de proyectos y visiones que se desarrollaron a lo largo del siglo XX. Sin embargo, dentro de esa diversidad existen elementos estructurantes que la diferencian de otros reformismos. Como explican Przeworski (1985) y Esping-Andersen (1986), a lo largo del siglo XX los partidos de izquierda tuvieron que lidiar con el “dilema electoral del socialismo” y optar entre dos caminos. El primero consistía en permanecer como partidos puros en su esencia de clase, pero, dado que en ninguna sociedad de occidente el proletariado superaba el 50%, condenados a no superar nunca el umbral de la mayoría electoral. El segundo era diluir sus identidades y convertirse en partidos de “los pobres, los asalariados, las mayorías o, simplemente, ciudadanos”. Además, esto implicaba aceptar las reglas del Estado de derecho y la gradualidad de cualquier cambio progresista. En este sentido, la socialdemocracia se definiría por su aceptación de subsumir la política de clase a la de las mayorías.</p>
            <h2>El dilema obrero</h2>
            <p>Concretamente, la historia de la socialdemocracia es la historia de una escisión en el movimiento obrero, reflejada en el quiebre que se dio entre la Segunda y la Tercera Internacional. La Segunda Internacional, establecida en 1889, agrupaba tanto a partidos socialistas que habían optado por la ruta socialdemócrata y los que se mantenían fieles a la concepción original de clase. Sin embargo, con el estallido de la Primera Guerra Mundial, esta se quiebra, y emerge la Tercera Internacional o Internacional Comunista. La segunda Internacional, por su parte, eventualmente pasaría a llamarse la Internacional Socialista. Para entender la socialdemocracia, vale la pena detenerse en el significado de la escisión original entre comunistas y socialistas. A la decisión de participar en la democracia liberal y la ampliación del marco de alianzas de clase se sumaría un tercer elemento que los historiadores de la social democracia han considerado como separador de aguas entre socialistas y comunistas: su sentido revolucionario o reformista. Esta distinción es probablemente la más controversial y disputada. Como bien explica Esping-Andersen, pese a cierto lugar común, tanto socialistas como comunistas en las democracias liberales buscaban reformas, “dentro de los confines capitalistas”. Tanto Rosa Luxemburgo como Eduard Bernstein estarían de acuerdo con la necesidad de pelear por mayores sueldos para mejorar los niveles de vida del proletariado. Es más, en los países con democracias liberales constituidas, la diferencia entre la forma de acceder al poder de socialdemócratas y comunistas es particularmente imprecisa. Como explica Rueschemeyer (1992) salvo algunas notorias excepciones (como Czechoslovakia en 1948): “las revoluciones desde abajo, ya sean marxistas-leninistas o de otro tipo, se han llevado a cabo en sistemas autoritarios, no democracias, y las tomas de poder por la vía armada, en una democracia, virtualmente siempre ocurren desde la derecha, no la izquierda” (56-57). No obstante, existían diferencias importantes en el carácter reformista y revolucionarios de los proyectos socialdemócratas y comunistas. Diferencias que se manifestaban, sobre todo, en la forma en que entendían su rol una vez en el gobierno, es decir, en su concepción de la relación entre lo social y lo democrático.</p>
        </div>
        <ArticleNav on:comments={() => commentsOpen = !commentsOpen} />
    </article>

    <hr class="m-5">

    <article>
        <header class="mb-5">
            <div class="mt-1 mb-1 relative">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/12/Salar_del_Huasco.jpg" />
                <small class="portada-caption"><a href="https://commons.wikimedia.org/wiki/File:Salar_del_Huasco.jpg">Freddy Alexander Bugueño Tolmo</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons</small>
            </div>
            <h1>¿"Minería" de Litio?</h1>
            <div>
                <p>Rodrigo González (copiado de CIPER, solo usado para dev)</p>
                <p>2 de Mayo, 2022</p>
                <p>#{article.id}</p>
            </div>
        </header>

        <div class="content">
            <p>Hace algunas semanas, el senador Felipe Harboe se imaginaba una eventual amplia coalición que podría conformarse en la oposición y que incluyera liberales, progresistas y socialistas. Incluso mencionó insignes figuras del mundo social cristiano y el autonomismo de izquierda como eventuales integrantes de esta coalición (Gabriel Boric y Soledad Alvear). Además, el senador especificaba que el punto de encuentro de toda es amplia diversidad era el “paragua socialdemócrata”.</p>
            <p>No solo eso, para seguir dificultando la definición del concepto, el probable candidato presidencial de la derecha, Joaquín Lavín, también se definía como socialdemócrata en un programa de televisión, a la vez que proponía un gobierno de centro, para liderar el país. Al mismo, tiempo, de modo similar, algunos han planteado que el programa presidencial del Beatriz Sánchez también era un programa eminentemente socialdemócrata.</p>
            <p>En realidad, tal como ocurre con otros conceptos que se emplean con frecuencia en el debate público, el uso ha generado un significado propio lejano de su concepción original y, en general, bastante difuso (como ocurre con “populismo” o “neoliberalismo”). Así, cuando se usa el término socialdemocracia, la mayoría de los comentaristas y opinólogos se refieren a algo así como un reformismo moderado de centroizquierda. Lo ambiguo e impreciso del término permite incluir o excluir actores según la circunstancia lo amerite y, a ratos, desentenderse de las contradicciones que surgen. Pero ¿qué ocurriría si nos tomáramos en serio la idea de un programa socialdemócrata? ¿Cuándo podríamos decir que estamos ante un proyecto socialdemócrata, a diferencia de los múltiples posibles reformismos del espectro político?</p>
            <p>La socialdemocracia incluye una multiplicidad de proyectos y visiones que se desarrollaron a lo largo del siglo XX. Sin embargo, dentro de esa diversidad existen elementos estructurantes que la diferencian de otros reformismos. Como explican Przeworski (1985) y Esping-Andersen (1986), a lo largo del siglo XX los partidos de izquierda tuvieron que lidiar con el “dilema electoral del socialismo” y optar entre dos caminos. El primero consistía en permanecer como partidos puros en su esencia de clase, pero, dado que en ninguna sociedad de occidente el proletariado superaba el 50%, condenados a no superar nunca el umbral de la mayoría electoral. El segundo era diluir sus identidades y convertirse en partidos de “los pobres, los asalariados, las mayorías o, simplemente, ciudadanos”. Además, esto implicaba aceptar las reglas del Estado de derecho y la gradualidad de cualquier cambio progresista. En este sentido, la socialdemocracia se definiría por su aceptación de subsumir la política de clase a la de las mayorías.</p>
            <h2>El dilema obrero</h2>
            <p>Concretamente, la historia de la socialdemocracia es la historia de una escisión en el movimiento obrero, reflejada en el quiebre que se dio entre la Segunda y la Tercera Internacional. La Segunda Internacional, establecida en 1889, agrupaba tanto a partidos socialistas que habían optado por la ruta socialdemócrata y los que se mantenían fieles a la concepción original de clase. Sin embargo, con el estallido de la Primera Guerra Mundial, esta se quiebra, y emerge la Tercera Internacional o Internacional Comunista. La segunda Internacional, por su parte, eventualmente pasaría a llamarse la Internacional Socialista. Para entender la socialdemocracia, vale la pena detenerse en el significado de la escisión original entre comunistas y socialistas. A la decisión de participar en la democracia liberal y la ampliación del marco de alianzas de clase se sumaría un tercer elemento que los historiadores de la social democracia han considerado como separador de aguas entre socialistas y comunistas: su sentido revolucionario o reformista. Esta distinción es probablemente la más controversial y disputada. Como bien explica Esping-Andersen, pese a cierto lugar común, tanto socialistas como comunistas en las democracias liberales buscaban reformas, “dentro de los confines capitalistas”. Tanto Rosa Luxemburgo como Eduard Bernstein estarían de acuerdo con la necesidad de pelear por mayores sueldos para mejorar los niveles de vida del proletariado. Es más, en los países con democracias liberales constituidas, la diferencia entre la forma de acceder al poder de socialdemócratas y comunistas es particularmente imprecisa. Como explica Rueschemeyer (1992) salvo algunas notorias excepciones (como Czechoslovakia en 1948): “las revoluciones desde abajo, ya sean marxistas-leninistas o de otro tipo, se han llevado a cabo en sistemas autoritarios, no democracias, y las tomas de poder por la vía armada, en una democracia, virtualmente siempre ocurren desde la derecha, no la izquierda” (56-57). No obstante, existían diferencias importantes en el carácter reformista y revolucionarios de los proyectos socialdemócratas y comunistas. Diferencias que se manifestaban, sobre todo, en la forma en que entendían su rol una vez en el gobierno, es decir, en su concepción de la relación entre lo social y lo democrático.</p>
        </div>
        <ArticleNav on:comments={() => commentsOpen = !commentsOpen} />
    </article>

    <hr class="m-5">

    <article>
        <header class="mb-5">
            <div class="mt-1 mb-1 relative">
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/EFE_CM-112_Juan_Pablo_II_-_Concepci%C3%B3n.jpg" />
                <small class="portada-caption"><a href="https://commons.wikimedia.org/wiki/File:EFE_CM-112_Juan_Pablo_II_-_Concepci%C3%B3n.jpg">Kabelleger / David Gubler</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons</small>
            </div>
            <h1>Formemos un Chile socialdemocrata desde las bases</h1>
            <div>
                <p>Rodrigo González (copiado de CIPER, solo usado para dev)</p>
                <p>2 de Mayo, 2022</p>
                <p>#{article.id}</p>
            </div>
        </header>

        <div class="content">
            <p>Hace algunas semanas, el senador Felipe Harboe se imaginaba una eventual amplia coalición que podría conformarse en la oposición y que incluyera liberales, progresistas y socialistas. Incluso mencionó insignes figuras del mundo social cristiano y el autonomismo de izquierda como eventuales integrantes de esta coalición (Gabriel Boric y Soledad Alvear). Además, el senador especificaba que el punto de encuentro de toda es amplia diversidad era el “paragua socialdemócrata”.</p>
            <p>No solo eso, para seguir dificultando la definición del concepto, el probable candidato presidencial de la derecha, Joaquín Lavín, también se definía como socialdemócrata en un programa de televisión, a la vez que proponía un gobierno de centro, para liderar el país. Al mismo, tiempo, de modo similar, algunos han planteado que el programa presidencial del Beatriz Sánchez también era un programa eminentemente socialdemócrata.</p>
            <p>En realidad, tal como ocurre con otros conceptos que se emplean con frecuencia en el debate público, el uso ha generado un significado propio lejano de su concepción original y, en general, bastante difuso (como ocurre con “populismo” o “neoliberalismo”). Así, cuando se usa el término socialdemocracia, la mayoría de los comentaristas y opinólogos se refieren a algo así como un reformismo moderado de centroizquierda. Lo ambiguo e impreciso del término permite incluir o excluir actores según la circunstancia lo amerite y, a ratos, desentenderse de las contradicciones que surgen. Pero ¿qué ocurriría si nos tomáramos en serio la idea de un programa socialdemócrata? ¿Cuándo podríamos decir que estamos ante un proyecto socialdemócrata, a diferencia de los múltiples posibles reformismos del espectro político?</p>
            <p>La socialdemocracia incluye una multiplicidad de proyectos y visiones que se desarrollaron a lo largo del siglo XX. Sin embargo, dentro de esa diversidad existen elementos estructurantes que la diferencian de otros reformismos. Como explican Przeworski (1985) y Esping-Andersen (1986), a lo largo del siglo XX los partidos de izquierda tuvieron que lidiar con el “dilema electoral del socialismo” y optar entre dos caminos. El primero consistía en permanecer como partidos puros en su esencia de clase, pero, dado que en ninguna sociedad de occidente el proletariado superaba el 50%, condenados a no superar nunca el umbral de la mayoría electoral. El segundo era diluir sus identidades y convertirse en partidos de “los pobres, los asalariados, las mayorías o, simplemente, ciudadanos”. Además, esto implicaba aceptar las reglas del Estado de derecho y la gradualidad de cualquier cambio progresista. En este sentido, la socialdemocracia se definiría por su aceptación de subsumir la política de clase a la de las mayorías.</p>
            <h2>El dilema obrero</h2>
            <p>Concretamente, la historia de la socialdemocracia es la historia de una escisión en el movimiento obrero, reflejada en el quiebre que se dio entre la Segunda y la Tercera Internacional. La Segunda Internacional, establecida en 1889, agrupaba tanto a partidos socialistas que habían optado por la ruta socialdemócrata y los que se mantenían fieles a la concepción original de clase. Sin embargo, con el estallido de la Primera Guerra Mundial, esta se quiebra, y emerge la Tercera Internacional o Internacional Comunista. La segunda Internacional, por su parte, eventualmente pasaría a llamarse la Internacional Socialista. Para entender la socialdemocracia, vale la pena detenerse en el significado de la escisión original entre comunistas y socialistas. A la decisión de participar en la democracia liberal y la ampliación del marco de alianzas de clase se sumaría un tercer elemento que los historiadores de la social democracia han considerado como separador de aguas entre socialistas y comunistas: su sentido revolucionario o reformista. Esta distinción es probablemente la más controversial y disputada. Como bien explica Esping-Andersen, pese a cierto lugar común, tanto socialistas como comunistas en las democracias liberales buscaban reformas, “dentro de los confines capitalistas”. Tanto Rosa Luxemburgo como Eduard Bernstein estarían de acuerdo con la necesidad de pelear por mayores sueldos para mejorar los niveles de vida del proletariado. Es más, en los países con democracias liberales constituidas, la diferencia entre la forma de acceder al poder de socialdemócratas y comunistas es particularmente imprecisa. Como explica Rueschemeyer (1992) salvo algunas notorias excepciones (como Czechoslovakia en 1948): “las revoluciones desde abajo, ya sean marxistas-leninistas o de otro tipo, se han llevado a cabo en sistemas autoritarios, no democracias, y las tomas de poder por la vía armada, en una democracia, virtualmente siempre ocurren desde la derecha, no la izquierda” (56-57). No obstante, existían diferencias importantes en el carácter reformista y revolucionarios de los proyectos socialdemócratas y comunistas. Diferencias que se manifestaban, sobre todo, en la forma en que entendían su rol una vez en el gobierno, es decir, en su concepción de la relación entre lo social y lo democrático.</p>
        </div>
        <ArticleNav on:comments={() => commentsOpen = !commentsOpen} />
    </article>
</div>

{#if commentsOpen}
<div class="fixed top-0 right-0 bottom-0 left-0 bg-[#0000006b] z-10" on:click={()=> commentsOpen = false}>
    <div transition:slide={{ duration: 250}} class="rounded-tl rounded-tr absolute bottom-0 left-0 right-0 h-13/14 p-1 bg-[#fff]" on:click={(e) => e.stopPropagation()}>
        <p>Hola</p>
        <Textarea class="fixed bottom-0 left-0 right-0" />
    </div>
</div>
{/if}

<style>

.page-header {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    @apply
    text-xl
}

header h1 {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    @apply
    text-3xl
}
.content {
    font-family: 'Cabin', sans-serif;
}
.content p {
    @apply
    mb-2
}
.content h2 {
    @apply
    font-bold mb-3

}
.portada-caption {
    line-height: 1;
    transform: rotate(-90deg);
    position: absolute;
    transform-origin: 100% 100%;
    right: -10px;
    font-size: 9px;
    top: 0px;
    opacity: 0.8;
}
</style>
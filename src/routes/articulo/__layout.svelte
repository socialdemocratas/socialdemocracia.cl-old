<script>
    import Logo from '../../assets/logo.svg'
</script>

<slot></slot>
<button class="btn-action">
    <img src={Logo} alt="Logo" width="32" height="32" />
</button>
<style>
.btn-action {
    background-color: white;
    @apply pl-3 p-3 flex items-center shadow rounded-1 sticky bottom-1 right-1
}
</style>
/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	interface Platform {
		env: {
			COUNTER: DurableObjectNamespace;
			ARTICLES: { binding: "ARTICLES", id: "6b873574420e41d685161ef9f53c045e" }
		};
		context: {
			waitUntil(promise: Promise<any>): void;
		}
	}
	// interface Session {}
	// interface Stuff {}
}

export async function post({ request, platform }) {
	const counter = platform.env.COUNTER.idFromName('A');
}
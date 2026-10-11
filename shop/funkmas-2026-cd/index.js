const image = document.getElementById('gallery-image');
const tabs = [...document.querySelectorAll('.gallery-tab')];

for (const tab of tabs) {
    tab.addEventListener('click', () => {
        for (const other of tabs) other.setAttribute('aria-pressed', String(other === tab));

        const next = new Image();
        tab.setAttribute('aria-busy', 'true');
        next.onload = next.onerror = () => {
            tab.removeAttribute('aria-busy');
            if (tab.getAttribute('aria-pressed') !== 'true') return;
            image.src = tab.dataset.src;
            image.alt = tab.dataset.alt;
        };
        next.src = tab.dataset.src;
    });
}

const PREORDER_COUNT_URL = "https://shopapi.funkystation.org/";

function render(count) {
    const goal = Number(document.getElementById('preorder-goal').textContent);

    document.getElementById('preorder-count').textContent = count;
    document.getElementById('preorder-bar').style.width = `${Math.min(100, (count / goal) * 100)}%`;
}

try {
    const response = await fetch(PREORDER_COUNT_URL);
    if (!response.ok) throw new Error(`Response status: ${response.status}`);

    const { count } = await response.json();
    if (!Number.isInteger(count) || count < 0) throw new Error('Bad count');

    render(count);
} catch (error) {
    console.error(error.message);
}

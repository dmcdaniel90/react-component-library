import Button from "../Button";
import { expect } from "storybook/test";


export default {
    component: Button
}

export const Primary = {
    name: 'Primary',
    args: {
        type: 'primary',
        size: 'md',
        fontSize: 'lg',
        textColor: 'black',
        radius: '0px',
        children: 'Primary',
        config: {
            colors: {
                primary: "#1ed1b6ff",
                secondary: "#6C757D",
                warning: "#6C757D",
                danger: "#DC3545",
            },
            sizes: {
                sm: { width: "100px", height: "40px" },
                md: { width: "150px", height: "50px" },
                lg: { width: "200px", height: "60px" },
            },
        },
        onClick: (e) => {
            e.target.innerText = "Clicked!"
            setTimeout(() => {
                e.target.innerText = "Primary"
            }, 1000)
        },
    },
    decorators: [
        (Story) => (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%" }}>
                <Story />
            </div>
        ),
    ],
    tags: ["autodocs"],
    play: async ({ canvasElement }) => {
        await expect(
            canvasElement.querySelector("button")
        ).toBeInTheDocument()

        await expect(
            canvasElement.querySelector("button").innerText
        ).toBe("Primary")
    }
}

export const Secondary = {
    name: "Secondary",
    args: {
        ...Primary.args,
        type: "secondary",
        textColor: "white",
        children: "Secondary",
        onClick: (e) => { 
            e.target.innerText = "Clicked!"
            setTimeout(() => {
                e.target.innerText = "Secondary"
            }, 1000)
        }
    },
    decorators: [...Primary.decorators],
    tags: ['autodocs'],
        play: async ({ canvasElement }) => {
        await expect(
            canvasElement.querySelector("button")
        ).toBeInTheDocument()

        await expect(
            canvasElement.querySelector("button").innerText
        ).toBe("Secondary")
            
    }
}

export const Warning = {
    name: "Warning",
    args: {
        ...Primary.args,
        type: "warning",
        textColor: "white",
        children: "Warning",
        onClick: (e) => { 
            e.target.innerText = "Clicked!"
            setTimeout(() => {
                e.target.innerText = "Warning"
            }, 1000)
        }
    },
    decorators: [...Primary.decorators],
    tags: ['autodocs'],
        play: async ({ canvasElement }) => {
        await expect(
            canvasElement.querySelector("button")
        ).toBeInTheDocument()

        await expect(
            canvasElement.querySelector("button").innerText
        ).toBe("Warning")
            
    }
}

export const Danger = {
    name: "Danger",
    args: {
        ...Primary.args,
        type: "danger",
        children: "Danger",
        textColor: "white",
        onClick: (e) => { 
            e.target.innerText = "Clicked!"
            setTimeout(() => {
                e.target.innerText = "Danger"
            }, 1000)
        }
    },
    decorators: [...Primary.decorators],
    tags: ['autodocs'],
        play: async ({ canvasElement }) => {
        await expect(
            canvasElement.querySelector("button")
        ).toBeInTheDocument()

        await expect(
            canvasElement.querySelector("button").innerText
        ).toBe("Danger")
            
    }
}
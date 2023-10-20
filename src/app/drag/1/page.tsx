'use client'

import React from 'react'

import { MainLayout } from '@/components/layouts'
import { SiteHeader } from '@/components/site-header'
import { cn } from '@/lib/utils'

type Item = {
  id: string
  name: string
}

type ReducerState = {
  left: Array<Item>
  right: Array<Item>
  selectedLeft: Array<string>
  selectedRight: Array<string>
}

type ReducerActions = {
  type: 'init' | 'select:left' | 'select:right' | 'move:right' | 'move:left'
  payload?: any
}

export default function Page() {
  const { state, dispatch } = useData()

  return (
    <MainLayout>
      <SiteHeader>Drag 1</SiteHeader>
      <main className="w-full">
        <div className="grid grid-cols-[1fr,6rem,1fr] gap-4">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl">Left</h2>
            {state.left.map((item) => (
              <label key={`left-${item.id}`}>
                <Item className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={state.selectedLeft.includes(item.id)}
                    onChange={() => {
                      dispatch({
                        type: 'select:left',
                        payload: item.id,
                      })
                    }}
                  />
                  {item.name}
                </Item>
              </label>
            ))}
          </div>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => {
                dispatch({
                  type: 'move:right',
                })
              }}
              className="rounded-lg border p-4"
            >
              &gt;
            </button>
            <button
              onClick={() => {
                dispatch({
                  type: 'move:left',
                })
              }}
              className="rounded-lg border p-4"
            >
              &lt;
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl">Right</h2>
            {state.right.map((item) => (
              <label key={`right-${item.id}`}>
                <Item className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={state.selectedRight.includes(item.id)}
                    onChange={() => {
                      dispatch({
                        type: 'select:right',
                        payload: item.id,
                      })
                    }}
                  />
                  {item.name}
                </Item>
              </label>
            ))}
          </div>
        </div>
      </main>
    </MainLayout>
  )
}

function Item({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        'rounded-lg bg-zinc-900 p-3 ring-white ring-offset-2 ring-offset-black transition delay-100 hover:bg-zinc-800 hover:ring-1',
        className
      )}
    >
      {children}
    </div>
  )
}

function toggleSelectedItem(state: Array<string>, value: string) {
  return state.includes(value)
    ? [...state.filter((item) => item !== value)]
    : [...state, value]
}

function sortItems(a: Item, b: Item) {
  return a.name.localeCompare(b.name)
}

const reducer = (state: ReducerState, action: ReducerActions): ReducerState => {
  switch (action.type) {
    case 'init':
      return {
        left: action.payload,
        right: [],
        selectedLeft: [],
        selectedRight: [],
      }
    case 'select:left':
      return {
        ...state,
        selectedLeft: toggleSelectedItem(state.selectedLeft, action.payload),
      }
    case 'select:right':
      return {
        ...state,
        selectedRight: toggleSelectedItem(state.selectedRight, action.payload),
      }
    case 'move:right':
      return {
        ...state,
        left: state.left.filter(
          (item) => !state.selectedLeft.includes(item.id)
        ),
        right: [
          ...state.right,
          ...state.left.filter((item) => state.selectedLeft.includes(item.id)),
        ].toSorted(sortItems),
        selectedLeft: [],
        selectedRight: [],
      }
    case 'move:left':
      return {
        ...state,
        right: state.right.filter(
          (item) => !state.selectedRight.includes(item.id)
        ),
        left: [
          ...state.left,
          ...state.right.filter((item) =>
            state.selectedRight.includes(item.id)
          ),
        ].toSorted(sortItems),
        selectedLeft: [],
        selectedRight: [],
      }
  }
  return state
}

const useData = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    left: [],
    right: [],
    selectedLeft: [],
    selectedRight: [],
  })

  React.useEffect(() => {
    getData().then(({ data }) =>
      dispatch({
        type: 'init',
        payload: data,
      })
    )
  }, [])

  return { state, dispatch }
}

function getData(): Promise<{
  data: Array<Item>
}> {
  const data = {
    data: [
      {
        id: '1',
        name: 'name1',
      },
      {
        id: '2',
        name: 'name2',
      },
      {
        id: '3',
        name: 'name3',
      },
      {
        id: '4',
        name: 'name4',
      },
      {
        id: '5',
        name: 'name5',
      },
    ],
  }
  return Promise.resolve(data)
}

.DEFAULT_GOAL := dev

## —— React Makefile ———————————————————————————————————
help: ## Outputs this help screen
	@grep -E '(^[a-zA-Z0-9_-]+:.*?## .*$$)|(^## )' Makefile | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

## —— Npm server ———————————————————————————————————
install: ## Install dependencies
	@test -f .env.local || cp .env .env.local
	bun install

dev: install ## Run the development server
	bun dev

build: install ## Build the application
	bun run build

prisma: ## Generate prisma client
	bun run prisma generate

prisma-migrate: ## Migrate prisma
	bun run prisma migrate dev

prisma-studio: ## Migrate prisma
	bun run prisma studio

## —— Linters ———————————————————————————————————
lint: ## Run all linters
	bun lint

analyze: lint build ## Run all linters and tests

## —— Git ———————————————————————————————————
git-clean-branches: ## Clean merged branches
	git remote prune origin
	(git branch --merged | egrep -v "(^\*|main|master|dev)" | xargs git branch -d) || true

git-rebase: ## Rebase current branch
	git pull --rebase origin main

message ?= $(shell git branch --show-current | sed -E 's/^([0-9]+)-([^-]+)-(.+)/\2: \#\1 \3/' | sed "s/-/ /g")
auto-commit: ## Auto commit
	git add .
	@git commit -m "${message}" || true

current_branch=$(shell git rev-parse --abbrev-ref HEAD)
push: ## Push current branch
	git push origin "$(current_branch)" --force-with-lease


commit: analyze auto-commit git-rebase push ## Commit and push

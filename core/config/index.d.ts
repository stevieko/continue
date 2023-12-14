/*

These are the types for the JSON config file, config.json.

**/

import { SlashCommand } from "../commands/index";
import { ContextProvider } from "../context";
import { LLM } from "../llm";

type StepName =
  | "AnswerQuestionChroma"
  | "GenerateShellCommandStep"
  | "EditHighlightedCodeStep"
  | "ShareSessionStep"
  | "CommentCodeStep"
  | "ClearHistoryStep"
  | "StackOverflowStep"
  | "OpenConfigStep"
  | "GenerateShellCommandStep"
  | "DraftIssueStep";

type ContextProviderName =
  | "diff"
  | "github"
  | "terminal"
  | "open"
  | "google"
  | "search"
  | "url"
  | "tree";

type TemplateType =
  | "llama2"
  | "alpaca"
  | "zephyr"
  | "phind"
  | "anthropic"
  | "chatml"
  | "deepseek";

type ModelProvider =
  | "openai"
  | "openai-free-trial"
  | "openai-aiohttp"
  | "anthropic"
  | "together"
  | "ollama"
  | "huggingface-tgi"
  | "huggingface-inference-api"
  | "llama.cpp"
  | "replicate"
  | "text-gen-webui"
  | "google-palm"
  | "google-palm-real"
  | "lmstudio"
  | "llamafile"
  | "gemini"
  | "mistral";

export type ModelName =
  // OpenAI
  | "gpt-3.5-turbo"
  | "gpt-3.5-turbo-16k"
  | "gpt-4"
  | "gpt-3.5-turbo-0613"
  | "gpt-4-32k"
  | "gpt-4-1106-preview"
  // Open Source
  | "mistral-7b"
  | "mistral-8x7b"
  | "llama2-7b"
  | "llama2-13b"
  | "codellama-7b"
  | "codellama-13b"
  | "codellama-34b"
  | "phind-codellama-34b"
  | "wizardcoder-7b"
  | "wizardcoder-13b"
  | "wizardcoder-34b"
  | "zephyr-7b"
  | "codeup-13b"
  | "deepseek-1b"
  | "deepseek-7b"
  | "deepseek-33b"
  // Anthropic
  | "claude-2"
  // Google PaLM
  | "chat-bison-001"
  // Gemini
  | "gemini-pro";

interface RequestOptions {
  timeout?: number;
  verifySsl?: boolean;
  caBundlePath: string;
  proxy?: string;
  headers?: Record<string, string>;
}

interface StepWithParams {
  name: StepName;
  params: { [key: string]: any };
}

interface ContextProviderWithParams {
  name: ContextProviderName;
  params: { [key: string]: any };
}

interface SlashCommandDescription {
  name: string;
  description: string;
  step: StepName | string;
  params?: { [key: string]: any };
}

interface CustomCommand {
  name: string;
  prompt: string;
  description: string;
}
interface RetrievalSettings {
  nRetrieve?: number;
  nFinal?: number;
  useReranking: boolean;
  rerankGroupSize: number;
  ignoreFiles: string[];
  openaiApiKey?: string;
  apiBase?: string;
  apiType?: string;
  apiVersion?: string;
  organizationId?: string;
}

interface BaseCompletionOptions {
  temperature?: number;
  topP?: number;
  topK?: number;
  presencePenalty?: number;
  frequencyPenalty?: number;
  stop?: string[];
  maxTokens: number;
}

interface ModelDescription {
  title: string;
  provider: ModelProvider;
  model: string;
  apiKey?: string;
  apiBase?: string;
  contextLength?: number;
  template?: TemplateType;
  completionOptions?: BaseCompletionOptions;
  systemMessage?: string;
  requestOptions?: RequestOptions;
}

interface ModelRoles {
  default: string;
  chat?: string;
  edit?: string;
  summarize?: string;
}

interface SerializedContinueConfig {
  disallowedSteps?: string[];
  allowAnonymousTelemetry?: boolean;
  models: ModelDescription[];
  modelRoles: ModelRoles;
  systemMessage?: string;
  completionOptions?: BaseCompletionOptions;
  slashCommands?: SlashCommandDescription[];
  customCommands?: CustomCommand[];
  contextProviders?: ContextProviderWithParams[];
  retrievalSettings?: RetrievalSettings;
  disableIndexing?: boolean;
}

interface ContinueConfig {
  allowAnonymousTelemetry?: boolean;
  models: LLM[];
  systemMessage?: string;
  completionOptions?: BaseCompletionOptions;
  slashCommands?: SlashCommand[];
  contextProviders?: ContextProvider[];
  retrievalSettings?: RetrievalSettings;
  disableIndexing?: boolean;
}

export {
  BaseCompletionOptions,
  ContextProviderName,
  ContextProviderWithParams,
  ContinueConfig,
  CustomCommand,
  ModelDescription,
  ModelProvider,
  ModelRoles,
  RequestOptions,
  RetrievalSettings,
  SerializedContinueConfig,
  SlashCommandDescription,
  StepName,
  StepWithParams,
  TemplateType,
};
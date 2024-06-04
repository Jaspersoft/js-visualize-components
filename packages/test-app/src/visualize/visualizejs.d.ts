export type Authentication = {
    url?: string,
    name? : string,
    password?: string,
    organization? : string | null,
    locale? :string,
    timezone?: string,
    token?: string,
    preAuth?: boolean,
    tokenName?: string,
    loginFn?: () => void,
    logoutFn?: () => void
}

export type SearchType = "folder" | "dataType" | "jdbcDataSource"| "awsDataSource" |"jndiJdbcDataSource" |"virtualDataSource"
    | "customDataSource" |"beanDataSource" |"xmlaConnection" |"listOfValues" |"file" |"reportOptions"
    | "dashboard" |"adhocDataView" |"query" |"olapUnit" |"reportUnit" |"domainTopic" |"semanticLayerDataSource"
    | "secureMondrianConnection" |"mondrianXmlaDefinition" |"mondrianConnection" |"inputControl" |"legacyDashboard";

export type SearchSortTerm = "uri" | "label" | "description" | "type"
    | "creationDate" | "updateDate" | "accessTime" | "popularity";

export type ResourcesSearchResponseType = {
    creationDate: string
    description: string
    label: string
    permissionMask: number
    resourceType: SearchType
    updateDate: string
    uri: string
    version: number
}

export type ResourcesSearch = {
    server?: string,
    q?: string,
    folderUri?: string,
    types?: SearchType[],
    offset?: number,
    limit?: number,
    recursive?: boolean,
    sortBy?: SearchSortTerm,
    accessType?: "viewed" | "modified",
    showHiddenItems?: boolean,
    forceTotalCount?: boolean,
    success?: (resources: ResourcesSearchResponseType[]) => void,
    error?: (err: any) => void
}

export type VisualizeFactoryConfig = {
    auth: Authentication
}

export type VisualizeFactory = {
    (params: VisualizeFactoryConfig, success: (v: VisualizeType) => void, error: (err: any) => void): void,
    noConflict(): VisualizeFactory
};

interface Deferred {
    done: (callback: (res: any) => void) => Deferred,
    fail: (callback: (err: any) => void) => Deferred
}

export type VisualizeGenericError = {
    errorCode: string,
    message: string,
    parameters: {[key: string]: string}[]
}

export type VisualizationConfig = {
    resource: string,
    container: string,
    error?: (error: VisualizeGenericError) => void
}

export interface VisualizeType {
    resourcesSearch: (config: ResourcesSearch) => void,
    logout(): Deferred,
    report: (config: VisualizationConfig) => void,
    adhocView: (config: VisualizationConfig) => void,
    dashboard: (config: VisualizationConfig) => void,
    InputControls: (config: VisualizationConfig) => void,
}


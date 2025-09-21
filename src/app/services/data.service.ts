import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Atrativo { nome: string; descricao: string[]; telefone: string | null; instagram: string | null; lat?: number; lng?: number }
export interface RestauranteGrupo { nome: string; descricao: string[]; telefone: string | null; instagram: string | null; lat?: number; lng?: number }
export interface RestaurantesJSON { [categoria: string]: RestauranteGrupo[] }
export interface HospedagemItem { nome: string; telefone: string | null; instagram: string | null; lat?: number; lng?: number }
export interface HospedagemJSON { [categoria: string]: HospedagemItem[] }
export interface BemEstarItem { nome: string; telefone: string | null; instagram: string | null; lat?: number; lng?: number }
export interface BemEstarJSON { terapias_bem_estar: BemEstarItem[] }
export interface ServicoItem { nome: string; telefone: string | null; instagram?: string | null; lat?: number; lng?: number }
export interface ServicosJSON { guias: ServicoItem[]; associacoes_operadoras: Omit<ServicoItem,'telefone'>[]; servicos_nauticos: ServicoItem[] }
export interface EmergenciaItem { servico: string; telefone: string; observacao?: string }
export interface EmergenciaJSON { emergencia: EmergenciaItem[] }
export interface OutrosJSON { outros_servicos: { [categoria: string]: { nome: string; telefone: string; instagram?: string | null; lat?: number; lng?: number }[] } }
export interface CatJSON { centro_atendimento_turista: { nome: string; telefone: string; instagram: string; email: string } }

@Injectable({ providedIn: 'root' })
export class DataService {
  private http = inject(HttpClient);
  private base = '/json';

  getAtrativos(): Observable<Atrativo[]> {
    return this.http.get<Atrativo[]>(`${this.base}/atrativos.json`);
  }

  getRestaurantes(): Observable<RestaurantesJSON> {
    return this.http.get<RestaurantesJSON>(`${this.base}/restaurantes.json`);
  }

  getHospedagem(): Observable<HospedagemJSON> {
    return this.http.get<HospedagemJSON>(`${this.base}/hospedagem.json`);
  }

  getBemEstar(): Observable<BemEstarJSON> {
    return this.http.get<BemEstarJSON>(`${this.base}/bem-estar.json`);
  }

  getServicos(): Observable<ServicosJSON> {
    return this.http.get<ServicosJSON>(`${this.base}/servicos.json`);
  }

  getEmergencia(): Observable<EmergenciaJSON> {
    return this.http.get<EmergenciaJSON>(`${this.base}/emergencia.json`);
  }

  getOutros(): Observable<OutrosJSON> {
    return this.http.get<OutrosJSON>(`${this.base}/outros.json`);
  }

  getCat(): Observable<CatJSON> {
    return this.http.get<CatJSON>(`${this.base}/cat.json`);
  }
}
